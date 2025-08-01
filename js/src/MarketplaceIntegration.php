<?php

namespace GrowBoxConstructor;

use Flarum\Settings\SettingsRepositoryInterface;

class MarketplaceIntegration
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function generateAffiliateLink($partId, $marketplace = 'ozon')
    {
        if ($marketplace === 'ozon' && $this->settings->get('growbox-constructor.ozon_enabled')) {
            $partnerId = $this->settings->get('growbox-constructor.ozon_partner_id');
            return "https://www.ozon.ru/partner/{$partnerId}/product/{$partId}";
        }

        if ($marketplace === 'wb' && $this->settings->get('growbox-constructor.wb_enabled')) {
            $partnerId = $this->settings->get('growbox-constructor.wb_partner_id');
            return "https://www.wildberries.ru/catalog/{$partId}/detail.aspx?partner={$partnerId}";
        }

        throw new \RuntimeException('Marketplace integration not configured');
    }
}