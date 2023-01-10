import glob from 'glob';
import { join, basename } from 'path';
import fs from "fs";
import fse from 'fs-extra';
import handlebars from 'vite-plugin-handlebars';
import viteImagemin from 'vite-plugin-imagemin'
import svgStore from 'svgstore';


async function svgSprite() {

    let sprite = svgStore({
        cleanSymbols: ['fill'],
        svgAttrs: {xmlns: 'http://www.w3.org/2000/svg'},
    });

    glob.sync('src/assets/img/svg/**.svg').map(item => {
        sprite.add(basename(item).replace('.svg', ''), fs.readFileSync(item));

        fs.writeFileSync('src/assets/img/sprite.svg', sprite.toString({ inline: true }));
    });

}

const config = {
    src: 'src',
    views: 'pages',
    dist: 'dist',
}

export default {
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: glob.sync('src/**/!(_parts)/*.html'),
            output: {
                assetFileNames: assetInfo => {
                    let extType = assetInfo.name.split('.')[1];

                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) extType = 'img';
                    if (/woff|ttf/i.test(extType)) extType = 'fonts';

                    return `assets/${extType}/[name][extname]`;
                },
                entryFileNames: 'assets/js/[name].js',
            },
        }
    },
    plugins: [
        handlebars({
            partialDirectory: 'src/pages/_parts',
        }),

        viteImagemin({
            gifsicle: { optimizationLevel: 7, interlaced: false },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 75, progressive: true },
            svgo: {
                plugins: [
                    {
                        name: 'removeDimensions',
                        active: true,
                    },
                ],
            }
        }),

        svgSprite,

        {
            handleHotUpdate: ({file, server}) => {
                if (file.endsWith('.html')) {
                    server.ws.send({ type: 'full-reload', path: '*' });
                }
            },

            configureServer: async viteDevServer => {
                return () => {
                    viteDevServer.middlewares.use(async (req, res, next) => {
                        if (req.originalUrl.endsWith('/')) {
                            req.url = join('/', config.views, req.originalUrl, 'index.html');
                        }

                        if (req.originalUrl.endsWith('.html')) {
                            req.url = join('/', config.views, req.originalUrl);
                        }

                        if (req.originalUrl.endsWith('.json')) {
                            let output = await viteDevServer.transformIndexHtml('?raw', fs.readFileSync(join('src', config.views, req.originalUrl)).toString())

                            res.setHeader('Content-Type', 'application/json');
                            res.end(output)
                        }

                        next();
                    });
                };
            },

            writeBundle: async () => {
                fse.copySync('dist/pages', 'dist', {overwrite: true});
                fse.removeSync('dist/pages', {recursive: true});
            },
        }
    ],
}