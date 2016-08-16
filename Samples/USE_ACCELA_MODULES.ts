import {IAccelaFunctions} from '../development/libs/DefinitelyTyped/AA/INCLUDES_ACCELA_MODULE.d';

var af: IAccelaFunctions;

/*---Here we go---*/

var myTasks = af.loadTasks('CIVI-00010-2016');

for (let i = 0; i < myTasks.length; i++) {
    myTasks[i] //use the task here
}
