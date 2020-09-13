new Vue({
    el: '#app',
    data: {
        lukeHealth: 100,
        vaderHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.lukeHealth = 100;
            this.vaderHealth = 100;
            this.turns = [];
        },
        attack: function() {
            let damage = this.calculateDamage(3, 10)
            this.vaderHealth -= damage;
            this.turns.unshift({
                isluke: true,
                text: 'Luke hits Vader for ' + damage
            });
            if (this.checkWin()){
                return;
            }
            this.vaderAttacks();
            this.checkWin();
        },
        specialAttack: function() {
            let damage = this.calculateDamage(10, 20);
            this.vaderHealth -= damage
            this.turns.unshift({
                isluke: true,
                text: 'Luke hits Vader hard for ' + damage
            });
            if (this.checkWin()){
                return;
            }
            this.vaderAttacks();
            this.checkWin();
        },
        heal: function() {
            if (this.lukeHealth <= 90) {
                this.lukeHealth += 10;
            } else {
                this.lukeHealth = 100;
            }
            this.turns.unshift({
                isluke: true,
                text: 'Luke heals for 10'
            });
            this.vaderAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        vaderAttacks: function() {
            let damage = this.calculateDamage(5, 12);
            this.lukeHealth -= damage;
            this.turns.unshift({
                isluke: false,
                text: 'Vader hits Luke for ' + damage
            });
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
             //Check if vader dead
             if (this.vaderHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            //Check if payer is dead    
            } else if (this.lukeHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});