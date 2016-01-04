angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;

    todoList.watchList = [
      {name: 'GOOG', symbol: '2317', price: '121.17', value: '12', k: '96.95', kPercent: '15.17', status: 'warning', upDownColor: 'green'},
      {name: 'FB', symbol: '7284', price: '285.96', value: '13', k: '97.95',  kPercent: '16.17',status: 'warning', upDownColor: 'red'},
      {name: 'AAPL', symbol: '5484', price: '586.48', value: '14', k: '98.95',  kPercent: '17.17',status: 'info', upDownColor: 'red'}
    ];

    todoList.watchListResult = [
        {title: 'Max', percent: +35.21, upDownColor: 'red'},
        {title: 'Min', percent: -1.04, upDownColor: 'green'},
        {title: 'Monthly', percent: +2.94, upDownColor: 'red'},
        {title: 'Daily', percent: +0.15, upDownColor: 'red'},
        {title: 'Weekly', percent: +0.61, upDownColor: 'red'}
    ]

    todoList.watchListDeletedItem = [];

    var i = 0;

    $('.noMoreStock').hide();

    todoList.add = function() {
        if (i >= todoList.watchListDeletedItem.length){
            $('.noMoreStock').show();
            $('.noMoreStock').fadeOut(4800);
        }else{
            todoList.watchList.push(todoList.watchListDeletedItem[i]);
            i += 1;
        }
    }

    todoList.remove = function(index) {
        todoList.watchListDeletedItem.push(todoList.watchList[index]);
        todoList.watchList.splice(index, 1);
    }

    // todoList.detailInfo = [
    //     {title: 'AVAILABLE', dollar: '$1234'},
    //     {title: 'TOTAL ALLOCATED', dollar: '$2345'},
    //     {title: 'PROFIT', dollar: '-$1234'},
    //     {title: 'EQULITY', dollar: '$2345'}
    // ];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };


  });
