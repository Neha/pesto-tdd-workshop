import { rest } from "msw";
import { setupServer} from "msw/node";
import { API } from '../Constants/Constants';

const server = setupServer(
    rest.get(API.RANDOM_QUOTES_URL, (req,res, ctx) => {
        ctx.delay(1000)
            return res(ctx.json({ 
                "content":"This is lovely day",
                "author":"John",
                "authorSlug":"abc",
                "length":48,
                "dateAdded":"2019-06-13",
                "dateModified":"2019-06-13"
            }
        ));
    })
)

export default server;