System.register(['angular2/core', './courses.component', './author.component', './favorite.component', './heart.component', './vote.component', './summary.pipe', './contact-form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, author_component_1, favorite_component_1, heart_component_1, vote_component_1, summary_pipe_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    /*For alvis operator*/
                    this.task = {
                        title: "Review applications",
                        assignee: null
                    };
                    this.canSave = true;
                    this.courses = ['course 1', 'course 2', 'course 3'];
                    /*viewMode = 'map' can be replace as ngSwitchDefault inside the target template div*/
                    this.viewMode = 'map'; //this is init, make the default option for the list
                    this.post = {
                        title: "Angular Tutorial",
                        body: '123456789十1112',
                        isFavorite: true,
                        totalLikes: 10,
                        iLike: false,
                        voteNum: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // template: '<h1>HelloAngularMy First Angular 2 App</h1><courses></courses>'+
                        // '<authors></authors>',
                        // directives: [CoursesComponent,AuthorComponent]
                        template: "\n      <h1>HelloAngularMy First Angular 2 App</h1><courses></courses>\n      <authors></authors>\n      <i class = \"glyphicon glyphicon-star\"></i>\n      <favorite [isFavorite] = \"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n      <like [iLike] =  \"post.iLike\" [totalLikes] = \"post.totalLikes\"></like>\n      <vote\n            [voteNum]=\"post.voteNum\"\n            [myVote]=\"post.myVote\">\n      </vote>\n      <div [hidden]=\"courses.length == 0\">\n        List of courses test1\n      </div>\n      <div [hidden]=\"courses.length > 0\">\n        List of courses test2\n      </div>\n      <div *ngIf=\"courses.length == 0\">\n        You don't have any courses yet.\n      </div>\n      <ul class=\"nav nav-pills\">\n        <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n        <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n\n      </ul>\n      <div [ngSwitch] = \"viewMode\">\n        <template [ngSwitchWhen]=\"'map'\">Map View Contentxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</template>\n        <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n      </div>\n      <ul>\n        <li *ngFor=\"#course of courses,#i = index\">\n            {{ i + 1}} - {{course}}\n        </li>\n      </ul>\n      {{post.title}}\n      <br/>\n      {{post.body | summary:3}}\n      <button\n\n        [ngStyle]=\"{\n          backgroundColor:canSave ? 'blue' : 'gray',\n          color:canSave ? 'white' : 'black',\n          fontWeight:canSave ? 'bold' : 'normal'\n        }\"\n      >Submit</button>\n      <ul>\n        <li>Title: {{ task.title}}</li>\n        <li>Assigned to : {{ task.assignee != null ? task.assignee.name : \"It's null\"}}</li>\n          <li>Assigned to : {{ task.assignee?.name }}</li>\n      </ul>\n      <contact-form></contact-form>  \n    ",
                        pipes: [summary_pipe_1.SummaryPipe],
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorComponent, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, vote_component_1.VoteComponent, contact_form_component_1.ContactFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map