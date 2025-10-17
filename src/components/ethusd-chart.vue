<template>
    <div class="tradingview-widget-container" style="height:100%;width:100%">
        <div id="tradingview_123" style="height:calc(100% - 32px);width:100%"></div>
        <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        const initWidget = () => {
            if (window.TradingView && window.TradingView.widget) {
                new window.TradingView.widget({
                    container_id: 'tradingview_123',
                    "width": "100%",
                    "height": 490,
                    "symbol": "BITSTAMP:ETHUSD",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "Dark",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#000",
                    "enable_publishing": false,
                    "withdateranges": true,
                    "hide_side_toolbar": false,
                    "allow_symbol_change": true,
                    "show_popup_button": true,
                    "popup_width": "1000",
                    "popup_height": "650",
                    support_host: 'https://www.tradingview.com',
                });
            }
        };
        if (!window.TradingView) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.onload = initWidget;
            document.head.appendChild(script);
        } else {
            initWidget();
        }
    },
}
</script>

<style lang="scss" scoped></style>