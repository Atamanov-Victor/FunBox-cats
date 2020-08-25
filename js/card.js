$(document).ready(function() {
    $(".card").click( function() {
        // изначально неправильно стал делать и прописывал отдельно изменения при событиях, только после вспомнил, что 
        // удобней все собрать в одном классе и его менять. Отсюда, некоторые стили в css, которые не использовались
        $(this).toggleClass('card-selected');
        $(this).removeClass('card-selected-hover');
        $(this).find('.card__subtitle').text('Сказочное заморское яство');
    }),
    $('.main-cards').on('mouseenter', '.card-selected', function() {
        $(this).find('.card__subtitle').text('Котэ не одобряет?');
        $(this).addClass('card-selected-hover');
    }),
    $('.main-cards').on('mouseleave', '.card-selected', function() {
        $(this).find('.card__subtitle').text('Сказочное заморское яство');
        $(this).removeClass('card-selected-hover');
    }),
    $('.disable').click(function() {
        $(this).parent().addClass('card-disabled');
    })
})

