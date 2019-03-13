
module.exports = function makeExchange(currency) {
    let exchange = {};
    let H, Q, D, N, P;

    if (currency <= 0) {
        return exchange;
    }

    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    if (0 < currency < 10000) {
        H = Math.floor(currency / 50);
        Q = Math.floor((currency - 50 * H) / 25);
        D = Math.floor((currency - 50 * H - 25 * Q) / 10);
        N = Math.floor((currency - 50 * H - 25 * Q - 10 * D) / 5);
        P = Math.floor((currency - 50 * H - 25 * Q - 10 * D - 5 * N) / 1);
        
        if (H != 0) exchange.H = H;
        if (Q != 0) exchange.Q = Q;
        if (D != 0) exchange.D = D;
        if (N != 0) exchange.N = N; 
        if (P != 0) exchange.P = P;
    }

return exchange;
}
