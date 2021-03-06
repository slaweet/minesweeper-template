///<reference path="../../ref.d.ts"/>

import "./minefield.directive.less";
import MinefieldController from "./minefield.controller.ts";
import * as api from "../../common/api";

class Minefield {

    public template = require("./minefield.directive.html");
    public replace = true;
    public restrict = "E";
    public controller = MinefieldController;
    public controllerAs = "vm";
    public scope = true;
    public bindToController = {
        /**
         * This is the displayed minefield of type `MinefieldData`
         */
        minefield: "=",
        /**
         * Game status
         */
        gameStatus: "="
    };

}

export default Minefield;
