"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var Ng2Carouselamos = (function () {
    function Ng2Carouselamos() {
        this.width = 500;
        this.childIndex = 0;
        this.amount = 0;
    }
    Ng2Carouselamos.prototype.ngAfterViewInit = function () {
        var $ng2Carouselamos = this.ng2Carouselamos.nativeElement;
        this.maxWidth = Array.prototype.slice.call($ng2Carouselamos.children).map(function (c) { return c.clientWidth; }).reduce(function (prev, curr) { return (prev + curr); });
    };
    Ng2Carouselamos.prototype.scroll = function (forward) {
        var $child = this.ng2Carouselamos.nativeElement.children[this.childIndex];
        var nChilds = this.ng2Carouselamos.nativeElement.children.length;
        if (forward) {
            this.amount -= $child.clientWidth;
            this.childIndex = (this.childIndex + 1) % nChilds;
        }
        else {
            this.amount += $child.clientWidth;
            this.childIndex = Math.abs((this.childIndex - 1) % nChilds);
        }
        this.ng2Carouselamos.nativeElement.style.webkitTransform = "translateX(" + this.amount + "px)";
    };
    return Ng2Carouselamos;
}());
__decorate([
    core_1.ViewChild('ng2Carouselamos')
], Ng2Carouselamos.prototype, "ng2Carouselamos");
__decorate([
    core_1.Input()
], Ng2Carouselamos.prototype, "width");
__decorate([
    core_1.Input()
], Ng2Carouselamos.prototype, "$prev");
__decorate([
    core_1.Input()
], Ng2Carouselamos.prototype, "$next");
Ng2Carouselamos = __decorate([
    core_1.Component({
        selector: '[ng2-carouselamos]',
        template: "\n      <style>\n        .ng2-carouselamos-container {\n          position: relative;\n          display: flex;\n          justify-content: center;\n        }\n        .ng2-carouselamos-wrapper {\n          overflow: hidden;\n        }\n        .ng2-carouselamos {\n          display: flex;\n          -webkit-transition: -webkit-transform 1s;\n        }\n        .controls {\n          position: absolute;\n          display: flex;\n          width: 100%;\n          justify-content: space-between;\n          top: 50%;\n          left: 0;\n          transform: translateY(-50%);\n        }\n        .controls button{\n          background: transparent;\n          border: 0;\n        }\n      </style>\n      <div class=\"ng2-carouselamos-container\">\n        <div class=\"ng2-carouselamos-wrapper\" [style.width]=\"width + 'px'\">\n          <div class=\"ng2-carouselamos\" #ng2Carouselamos>\n            <ng-content></ng-content>\n          </div>\n        </div>\n        <div class=\"controls\" *ngIf=\"$prev || $next\">\n          <button *ngIf=\"$prev\" (click)=\"scroll(false)\" [disabled]=\"amount >= 0\">\n            <ng-template [ngTemplateOutlet]=\"$prev\"></ng-template>\n          </button>\n          <button *ngIf=\"$next\" (click)=\"scroll(true)\" [disabled]=\"amount <= -maxWidth\">\n            <ng-template [ngTemplateOutlet]=\"$next\"></ng-template>\n          </button>\n        </div>\n      </div>\n    "
    })
], Ng2Carouselamos);
exports.Ng2Carouselamos = Ng2Carouselamos;
var Ng2CarouselamosModule = (function () {
    function Ng2CarouselamosModule() {
    }
    return Ng2CarouselamosModule;
}());
Ng2CarouselamosModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [Ng2Carouselamos],
        declarations: [Ng2Carouselamos]
    })
], Ng2CarouselamosModule);
exports.Ng2CarouselamosModule = Ng2CarouselamosModule;
