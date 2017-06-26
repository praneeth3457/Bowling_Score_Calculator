/**
 * Created by praneethrajreddyveerlapally on 6/24/17.
 */

var app = angular.module('bowling', []);

app.controller('mainCtrl', function($scope){
    var main = this;

    var scoreBtns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var scoreArray = [
        {
            "id" : 1,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 2,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 3,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 4,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 5,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 6,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 7,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 8,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 9,
            "score1" : '',
            "score2" : '',
            "score2Sym" : '',
            "total" : ''
        },
        {
            "id" : 10,
            "score1" : '',
            "score2" : '',
            "score3" : '',
            "score1Sym" : '',
            "score2Sym" : '',
            "score3Sym" : '',
            "total" : ''
        }
    ];

    var lastScoreIndex = 1;


    main.isDone = false;
    main.totalScore = 0;
    main.maxScore = 300;
    main.maxScoreGet = 300;
    main.scores = scoreArray.slice();
    main.scoreBtns = scoreBtns;
    main.scoreIndex = 0;
    main.indexOfIndex = 0;

    main.scoreFun = function (btn) {
        var remaining = 10-btn;
        var newBtns;
        if(btn == 10) {
            main.indexOfIndex = 1;
        }


        /*
        ** Scores for a Spare **
        */
        if(main.scoreIndex > 0 && main.scoreIndex <=9) {
            if(main.scores[main.scoreIndex - 1].score2Sym == '/'){
                if(main.scores[main.scoreIndex].score1 == ''){
                    main.scores[main.scoreIndex - 1].total = 10 + btn;
                }

            }
        }


        if(main.scoreIndex == 1) {
            if(main.scores[main.scoreIndex - 1].score2Sym == 'X') {
                if(main.scores[main.scoreIndex].score1 !== '') {
                    main.scores[main.scoreIndex - 1].total = 10 + main.scores[main.scoreIndex].score1 + btn;
                }
            }
        } else if(main.scoreIndex > 1) {
            if(main.scores[main.scoreIndex - 1].score2Sym == 'X') {
                if(main.scores[main.scoreIndex - 2].score2Sym == 'X') {
                    if(main.scores[main.scoreIndex].score1 === '') {
                        main.scores[main.scoreIndex - 2].total = 20 + btn;
                    }
                    //Else won't exist
                }

                if(main.scores[main.scoreIndex].score1 != '' &&  btn !== 10) {
                    main.scores[main.scoreIndex - 1].total = 10 + main.scores[main.scoreIndex].score1 + btn;
                }

            }
        }

        if(main.scoreIndex == 9) {
            if(lastScoreIndex == 1) {
                main.scores[main.scoreIndex].score1 = btn;
                lastScoreIndex += 1;
                if(remaining == 0){
                    main.scores[main.scoreIndex].score1Sym = 'X';
                } else {
                    main.scores[main.scoreIndex].score1Sym = btn;
                }
                if(remaining != 0){
                    main.scoreBtns = scoreBtns.slice(0, remaining+1);
                }
                remaining = 10;


                if(main.scores[main.scoreIndex - 1].score2Sym == '/') {
                    main.scores[main.scoreIndex - 1].total = 10 + btn;
                }

            } else if(lastScoreIndex == 2) {
                main.scores[main.scoreIndex].score2 = btn;
                main.scoreBtns = scoreBtns;
                if((main.scores[main.scoreIndex].score1 + btn) == 10) {
                    lastScoreIndex += 1;
                    main.scores[main.scoreIndex].score2Sym = '/';
                } else if(btn == 10){
                    lastScoreIndex += 1;
                    main.scores[main.scoreIndex].score2Sym = 'X';
                } else {
                    lastScoreIndex = 1;
                    main.scores[main.scoreIndex].score2Sym = btn;
                    main.scores[main.scoreIndex].total = main.scores[main.scoreIndex].score1 + main.scores[main.scoreIndex].score2;
                    main.scoreIndex += 1;
                    main.isDone = true;
                }

                if (main.scores[main.scoreIndex - 1].score2Sym == 'X') {
                    main.scores[main.scoreIndex - 1].total = 10 + main.scores[main.scoreIndex].score1 + btn;
                }
            } else if(lastScoreIndex == 3) {
                main.scores[main.scoreIndex].score3 = btn;
                main.scores[main.scoreIndex].score3Sym = 'X';
                if(btn == 10){
                    main.scores[main.scoreIndex].score3Sym = 'X';
                } else {
                    main.scores[main.scoreIndex].score3Sym = btn;
                }
                main.scores[main.scoreIndex].total = main.scores[main.scoreIndex].score1 + main.scores[main.scoreIndex].score2 + main.scores[main.scoreIndex].score3;
                main.scoreIndex += 1;
                main.isDone = true;
            }

        } else if (main.scoreIndex < 9){
            if(remaining != 0){
                if(main.indexOfIndex == 0){
                    main.scores[main.scoreIndex].score1 = btn;
                    //main.scores[main.scoreIndex].total = main.scores[main.scoreIndex].score1;
                    newBtns = scoreBtns.slice(0, remaining+1);
                    main.scoreBtns = newBtns;
                    if(btn != 10){
                        main.indexOfIndex = 1;
                    }

                } else if(main.indexOfIndex == 1) {
                    main.scores[main.scoreIndex].score2 = btn;
                    if((parseInt(main.scores[main.scoreIndex].score1) + parseInt(main.scores[main.scoreIndex].score2)) == 10){
                        main.scores[main.scoreIndex].score2Sym = '/';
                    } else {
                        main.scores[main.scoreIndex].score2Sym = btn;
                    }
                    main.indexOfIndex = 0;
                    main.scoreBtns = scoreBtns;

                    //Adding Total Points
                    if(main.scores[main.scoreIndex].score2Sym != '/') {
                        main.scores[main.scoreIndex].total = main.scores[main.scoreIndex].score1 + main.scores[main.scoreIndex].score2;
                    }

                    //Increasing the game index if it is not the last game
                    if(main.scoreIndex <= 9){
                        main.scoreIndex += 1;
                    }
                }

            } else {
                main.scores[main.scoreIndex].score2 = btn;
                main.scores[main.scoreIndex].score2Sym = 'X';
                main.indexOfIndex = 0;
                main.scoreBtns = scoreBtns;
                if(main.scoreIndex <= 9){
                    main.scoreIndex += 1;
                }
            }
        }

        main.totalScore = 0;
        main.maxScoreGet = 300;
        for(var i=0; i<main.scores.length; i++) {
            if(main.scores[i].total !== ''){
                main.totalScore += main.scores[i].total;
                main.maxScoreGet -= (30 - main.scores[i].total);
            }
        }


    };

    main.resetScores = function(){
        lastScoreIndex = 1;
        main.isDone = false;
        main.totalScore = 0;
        main.scores = scoreArray.slice();
        main.scoreBtns = scoreBtns;
        main.scoreIndex = 0;
        main.indexOfIndex = 0;
        main.totalScore = 0;
        main.maxScoreGet = 300;
    }
});
