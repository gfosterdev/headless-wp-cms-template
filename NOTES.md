# Wordpress Alterations

## Add a new data segment

To add a 'page' programatically to show up in admin panel, add this to wp-content/themes/[active_theme]/functions.php

```
add_action('init', function() {
	register_post_type('project', [
		'public' => true,
		'label' => 'Projects',
		'show_in_graphql' => true,
		'graphql_single_name' => 'Project',
		'graphql_plural_name' => 'Projects',
	]);
});
```

## Issues

### Unable to upload plugin, file size too large

Add this line at the end of the .htaccess file in wordpress root install directory:

`php_value upload_max_filesize 256M`
