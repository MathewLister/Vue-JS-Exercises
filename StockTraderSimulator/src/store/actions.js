import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(respone => respone.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = stocks.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        });
}