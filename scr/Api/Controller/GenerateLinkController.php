<?php

namespace GrowBoxConstructor\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use GrowBoxConstructor\MarketplaceIntegration;

class GenerateLinkController extends AbstractCreateController
{
    protected $marketplace;

    public function __construct(MarketplaceIntegration $marketplace)
    {
        $this->marketplace = $marketplace;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertRegistered();

        $params = $request->getParsedBody();
        $partId = Arr::get($params, 'partId');
        $marketplace = Arr::get($params, 'marketplace', 'ozon');

        return [
            'url' => $this->marketplace->generateAffiliateLink($partId, $marketplace)
        ];
    }
}