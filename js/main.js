on(window, 'load', function () {


    $('.button-start').click(() => {
        let name = $('#name').val();
        if (name) {
            var game = new Game(name);
            $('.name-container').toggleClass('hide');
            $('.game-container').toggleClass('hide');
            game.setup();
            event(game);
        } else {
            alert('请先输入姓名再进入游戏！');
        }
    })

});