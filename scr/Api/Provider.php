<?php

namespace GrowBoxConstructor;

use Flarum\Foundation\AbstractServiceProvider;
use Illuminate\Contracts\Container\Container;

class Provider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->singleton('growbox.marketplace', function (Container $container) {
            return new MarketplaceIntegration(
                $container->make('settings')
            );
        });
    }
}