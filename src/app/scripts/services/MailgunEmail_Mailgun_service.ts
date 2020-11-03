/**
 * Module initializes rest service MailgunEmail_Mailgun_service
 */
import {
    Injectable
} from '@angular/core';
import _ from "lodash";
import {
    ApperyioRestService,
    EntityApiService
} from '../apperyio/apperyio';
/**
 * Api is a generic REST Api handler. Set your API url first.
 extends ApperyioService*/
@Injectable()
class MailgunEmail_Mailgun_service {
    merge_requests(defaults, request) {
        return _.mergeWith({}, defaults, request, function(a, b) {
            if (_.isUndefined(b)) {
                return a;
            }
        });
    }
    constructor(private apperyioService: ApperyioRestService, private entityAPI: EntityApiService) {}
    execute(reqOpts ? : any) {
        /**
         * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
         * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
         * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
         * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                                to send to the server. If the return value of a function is null,
                                                                the header will not be sent.
         * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                                after the url. If the value is not a string, it will be JSONified.
         * @property {string|Object} data                     - Data to be sent as the request message data.
         * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
         * @property {Object.<string, string>} aio_config     - Apperyio configuration object
         * @property {string} requestType                     - Request type
         * @property {string} responseType                    - Response type
         * @property {string} serviceName                     - Service name
         */
        let config = {
            url: "https://api.appery.io/rest/1/code/d45709e0-745c-4d75-8676-ead84495424e/exec",
            method: "post",
            headers: this.entityAPI.get("MailgunEmail_Mailgun_service.request.headers"),
            params: this.entityAPI.get("MailgunEmail_Mailgun_service.request.query"),
            data: this.entityAPI.get("MailgunEmail_Mailgun_service.request.body", reqOpts.data, true, true) || "",
            aio_config: {
                requestType: "data",
                responseType: "json",
                serviceName: "MailgunEmail_Mailgun_service"
            }
        };
        if (!reqOpts || typeof reqOpts !== "object") {
            reqOpts = {};
        }
        return this.apperyioService.run(this.merge_requests(config, reqOpts));
    }
}
/*
    Service class should be exported as ExportedClass
*/
export {
    MailgunEmail_Mailgun_service as ExportedClass
};