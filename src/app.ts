import Koa from 'koa';
import views from 'koa-views';
import KoaRouter from 'koa-router';
import config from './config';
import serve from 'koa-static';

const app = new Koa();
const router = new KoaRouter();

app.use(views(`${__dirname}/views`, {
    map: {
        html: 'lodash'
    }
}));

app.use(serve(`${__dirname}/static`));

app.use(async (ctx, next) => {
    try {
        console.log("Request Received")
        await next();
    } catch (err) {
        ctx.status = 500;
        console.error('Uncaught Error: ', err);
    }
});

router.get('/', async (ctx, next) => {
    console.log('Root Request');
    await ctx.render('test', { author: 'christian' });
});

router.get('/search', async (ctx, next) => {
    console.log('Search Request');
    await ctx.render('search', {
        searchURI: config.searchApiUrl,
        moreInfoUrl: config.umdMoreInfoUrl,
    });
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
