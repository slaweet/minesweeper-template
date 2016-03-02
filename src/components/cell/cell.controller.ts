///<reference path="../../ref.d.ts"/>

import MinefieldData from "../minefield/minefield.controller.ts";
import MinefieldService from "../../services/minefield.service";
import * as api from "../../common/api";

/**
 * @ngInject
 */
class MineController {

    public cellData:api.MinefieldCell;
    public onClick:(args:{$event:JQueryEventObject, cellData:api.IMinefieldCell})=>void;


    /**
     * @param swMinefieldService
     * @param $sce this service can be used to trust html from a string e.g. $sce.trustAsHtml("&nbsp;")
     */
    constructor(private swMinefieldService:MinefieldService) {
    }

    /**
     * This class returns an ng-class object (https://docs.angularjs.org/api/ng/directive/ngClass)
     */
    public getButtonClasses() {
        return {
            'sw-cell__button--hidden': this.cellData.status === api.MinefieldCellStatus.HIDDEN,
            'sw-cell__button--revealed': this.cellData.status === api.MinefieldCellStatus.REVEALED,
            'sw-cell__button--has-mine': this.cellData.hasMine && this.cellData.status === api.MinefieldCellStatus.REVEALED,
            'sw-cell__button--flagged': this.cellData.status === api.MinefieldCellStatus.FLAGGED
        };
    }

    public getButtonText() {
        if (this.cellData.neighbours > 0
            && (!this.cellData.hasMine)
            && this.cellData.status === api.MinefieldCellStatus.REVEALED) {

            return this.cellData.neighbours;
        } else {
            return "&nbsp;";
        }

    }

    public onClickCell(e): void {
        this.onClick({
            $event: e,
            cellData: this.cellData
        });
    };

}

export default MineController;
