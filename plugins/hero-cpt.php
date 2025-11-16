<?php
/**
 * Plugin Name: Hero Section CPT
 * Description: Registers a hero_section CPT for headless hero content.
 */

add_action('init', function() {
  $labels = [
    'name' => 'Hero Sections',
    'singular_name' => 'Hero Section',
  ];

  register_post_type('hero_section', [
    'labels' => $labels,
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'show_in_rest' => true,   // expose at /wp-json/wp/v2/hero_section
    'rest_base' => 'hero_section',
    'supports' => ['title'],
    'has_archive' => false,
    'rewrite' => false,
  ]);
});
