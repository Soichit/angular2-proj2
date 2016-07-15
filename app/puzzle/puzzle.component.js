System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: " \n        <section class=\"setup\">\n            <h2>Game Setup</h2>\n            Enter your name please:\n            <input type=\"text\" #name (keyup)=\"0\">            \n        </section>\n        \n        <section\n            [ngClass]=\"{\n                puzzle: true,\n                solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n            }\"\n            [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n        >\n            <h2>\n                The Puzzle |\n                {{\n                    switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n                    ? 'SOLVED' : 'NOT SOLVED'\n                }}\n            </h2>\n            <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br />\n            Switch 2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br />\n            Switch 3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br />\n            Switch 4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br />\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number\n                    \">Congratulations {{name.value}}, you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUNBO2dCQUFBO2dCQWFBLENBQUM7Z0JBUEcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQWxETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsMmdEQWtDVDtxQkFDSixDQUFDOzttQ0FBQTtnQkFjRixzQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsNkNBYUMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnR7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxyXG4gICAgdGVtcGxhdGU6IGAgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxyXG4gICAgICAgICAgICA8aDI+R2FtZSBTZXR1cDwvaDI+XHJcbiAgICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgIHB1enpsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXHJcbiAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICBUaGUgUHV6emxlIHxcclxuICAgICAgICAgICAgICAgIHt7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnU09MVkVEJyA6ICdOT1QgU09MVkVEJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgIFN3aXRjaCAxOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxiciAvPlxyXG4gICAgICAgICAgICBTd2l0Y2ggMjpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnIgLz5cclxuICAgICAgICAgICAgU3dpdGNoIDM6XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyIC8+XHJcbiAgICAgICAgICAgIFN3aXRjaCA0OlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxiciAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8IHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fCBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICBcIj5Db25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoM051bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpOyAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
