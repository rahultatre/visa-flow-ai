import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environment/environments';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
    const apiBaseUrl = environment.apiBaseUrl;
    
    // Skip if it's already an absolute URL
    if (/^https?:\/\//.test(req.url)) {
        return next(req);
    }

    const apiReq = req.clone({
        url: `${environment.apiBaseUrl}${req.url}`
    });

    return next(apiReq);

};