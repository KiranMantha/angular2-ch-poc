import { Injectable } from '@angular/core';
import { DialogService } from '../Components/dialog/dialog.service';

@Injectable()
export class utilSrv {
    constructor(private _dialogService: DialogService) {

    }
    private returnParams(srcParams: Array<any>, dstParams: Array<any>): Object {
        if (dstParams) {
            var params = {},
                isMatch = true;
            for (var i = 0; i < srcParams.length; i++) {
                if (srcParams[i].indexOf(':') >= 0) {
                    //it is extract param
                    if (typeof dstParams[i] === 'undefined') {
                        params[srcParams[i].substr(1)] = null;
                    } else {
                        params[srcParams[i].substr(1)] = dstParams[i];
                    }
                } else {
                    //if it is hard param, hve to check url to compare
                    if (dstParams[i] != srcParams[i]) {
                        isMatch = false;
                        break;
                    }
                }
            }
            return { IsMatch: isMatch, Params: params };
        }
    };
    public parseUrl(mvcUrl: string, urlToParse: string): Object {
        var sParams = mvcUrl.split('/').filter(function (h) {
            return h.length > 0;
        });
        var uParams = urlToParse.split('/').filter(function (h) {
            return h.length > 0;
        });

        return this.returnParams(sParams, uParams);

    };

    public openModal(templateUrl: string, modalData: any) {
        // var modalInstance = $uibModal.open({
        //     templateUrl: templateUrl,
        //     controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
        //         $scope.modalData = modalData;
        //         $scope.close = function () {
        //             $uibModalInstance.close();
        //         };
        //     }],
        //     backdrop: 'static'
        // });
        this._dialogService.create()
    };
}

@Injectable()
export class GlobalService {
    dialogContainer: any;
}