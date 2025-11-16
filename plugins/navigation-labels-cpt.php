<?php
/**
 * Plugin Name: Navigation Labels CPT
 * Description: Registers a custom post type "navigation_label" for managing navigation menu items via headless CMS.
 * Version: 1.0
 * Author: Your Team
 */

if (!defined('ABSPATH')) exit;

add_action('init', function() {

    $labels = [
        'name'               => 'Navigation Labels',
        'singular_name'      => 'Navigation Label',
        'menu_name'          => 'Navigation Labels',
        'name_admin_bar'     => 'Navigation Label',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Navigation Label',
        'edit_item'          => 'Edit Navigation Label',
        'new_item'           => 'New Navigation Label',
        'view_item'          => 'View Navigation Label',
        'search_items'       => 'Search Navigation Labels',
    ];

    register_post_type('navigation_label', [
        'labels' => $labels,
        'public' => false,             // not a public-facing page
        'show_ui' => true,             // visible in admin
        'show_in_menu' => true,
        'show_in_rest' => true,        // <-- VERY IMPORTANT: enables REST API
        'rest_base' => 'navigation_label',
        'supports' => ['title'],       // ACF handles the fields
        'menu_icon' => 'dashicons-editor-ul',
        'has_archive' => false,
        'rewrite' => false,
        'capability_type' => 'post',
    ]);

});
