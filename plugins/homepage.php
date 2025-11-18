<?php
function register_homepage_cpt() {
  register_post_type('homepage', [
    'label' => 'Homepage',
    'public' => true,
    'show_in_rest' => true,
    'supports' => ['title','custom-fields'],
    'has_archive' => false,
  ]);
}
add_action('init','register_homepage_cpt');

function register_homepage_meta() {
  $keys = [
    'hero_title','hero_subtitle','hero_body_html','hero_cta_text','hero_cta_url',
    'what_title','what_items_json',
    'how_title','how_body_html','how_items_json',
    'who_title','who_items_json',
    'why_title','why_body_html','why_items_json'
  ];
  foreach ($keys as $k) {
    register_post_meta('homepage', $k, [
      'type' => 'string',
      'single' => true,
      'show_in_rest' => true,
      'sanitize_callback' => function($v){ return is_string($v)? $v : ''; },
    ]);
  }
}
add_action('init','register_homepage_meta');