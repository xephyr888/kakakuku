<?php

namespace GrowBoxConstructor;

use Flarum\Extend;
use GrowBoxConstructor\Api\Controller\GenerateLinkController;
use GrowBoxConstructor\Listeners\AddClientAssets;
use GrowBoxConstructor\Provider;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/growbox/generate-link', 'growbox.generate-link', GenerateLinkController::class),

    (new Extend\View)
        ->namespace('growbox-constructor', __DIR__.'/templates'),

    (new Extend\ServiceProvider)
        ->register(Provider::class),
];