require(
    ['factory/init', 'pubsub/init', 'strategy/init', 'observer/init', 'cor/init', 'mediator/init', 'iterator/init',
    'facade/init', 'decorator/init', 'adapter/init', 'composite/init', 'proxy/init'],
    function (factory, pubsub, strategy, observer, cor, mediator, iterator, facade, decorator, adapter, composite, proxy) {
        'use strict';

        var examples = {
            factory: factory

        };

        window.runExample = function (example) {
            examples[example].init();
        };

        window.runExample("factory");
    }
);
