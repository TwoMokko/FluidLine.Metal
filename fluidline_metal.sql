-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 29 2024 г., 17:11
-- Версия сервера: 10.8.4-MariaDB
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fluidline_metal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_actiondom`
--

CREATE TABLE `modx_access_actiondom` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_category`
--

CREATE TABLE `modx_access_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_context`
--

CREATE TABLE `modx_access_context` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_access_context`
--

INSERT INTO `modx_access_context` (`id`, `target`, `principal_class`, `principal`, `authority`, `policy`) VALUES
(1, 'web', 'MODX\\Revolution\\modUserGroup', 0, 9999, 3),
(2, 'mgr', 'MODX\\Revolution\\modUserGroup', 1, 0, 2),
(3, 'web', 'MODX\\Revolution\\modUserGroup', 1, 0, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_elements`
--

CREATE TABLE `modx_access_elements` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_media_source`
--

CREATE TABLE `modx_access_media_source` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_menus`
--

CREATE TABLE `modx_access_menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_namespace`
--

CREATE TABLE `modx_access_namespace` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_permissions`
--

CREATE TABLE `modx_access_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `template` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` tinyint(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_access_permissions`
--

INSERT INTO `modx_access_permissions` (`id`, `template`, `name`, `description`, `value`) VALUES
(1, 1, 'about', 'perm.about_desc', 1),
(2, 1, 'access_permissions', 'perm.access_permissions_desc', 1),
(3, 1, 'actions', 'perm.actions_desc', 1),
(4, 1, 'change_password', 'perm.change_password_desc', 1),
(5, 1, 'change_profile', 'perm.change_profile_desc', 1),
(6, 1, 'charsets', 'perm.charsets_desc', 1),
(7, 1, 'class_map', 'perm.class_map_desc', 1),
(8, 1, 'components', 'perm.components_desc', 1),
(9, 1, 'content_types', 'perm.content_types_desc', 1),
(10, 1, 'countries', 'perm.countries_desc', 1),
(11, 1, 'create', 'perm.create_desc', 1),
(12, 1, 'credits', 'perm.credits_desc', 1),
(13, 1, 'customize_forms', 'perm.customize_forms_desc', 1),
(14, 1, 'dashboards', 'perm.dashboards_desc', 1),
(15, 1, 'database', 'perm.database_desc', 1),
(16, 1, 'database_truncate', 'perm.database_truncate_desc', 1),
(17, 1, 'delete_category', 'perm.delete_category_desc', 1),
(18, 1, 'delete_chunk', 'perm.delete_chunk_desc', 1),
(19, 1, 'delete_context', 'perm.delete_context_desc', 1),
(20, 1, 'delete_document', 'perm.delete_document_desc', 1),
(21, 1, 'delete_weblink', 'perm.delete_weblink_desc', 1),
(22, 1, 'delete_symlink', 'perm.delete_symlink_desc', 1),
(23, 1, 'delete_static_resource', 'perm.delete_static_resource_desc', 1),
(24, 1, 'delete_eventlog', 'perm.delete_eventlog_desc', 1),
(25, 1, 'delete_plugin', 'perm.delete_plugin_desc', 1),
(26, 1, 'delete_propertyset', 'perm.delete_propertyset_desc', 1),
(27, 1, 'delete_snippet', 'perm.delete_snippet_desc', 1),
(28, 1, 'delete_template', 'perm.delete_template_desc', 1),
(29, 1, 'delete_tv', 'perm.delete_tv_desc', 1),
(30, 1, 'delete_role', 'perm.delete_role_desc', 1),
(31, 1, 'delete_user', 'perm.delete_user_desc', 1),
(32, 1, 'directory_chmod', 'perm.directory_chmod_desc', 1),
(33, 1, 'directory_create', 'perm.directory_create_desc', 1),
(34, 1, 'directory_list', 'perm.directory_list_desc', 1),
(35, 1, 'directory_remove', 'perm.directory_remove_desc', 1),
(36, 1, 'directory_update', 'perm.directory_update_desc', 1),
(37, 1, 'edit_category', 'perm.edit_category_desc', 1),
(38, 1, 'edit_chunk', 'perm.edit_chunk_desc', 1),
(39, 1, 'edit_context', 'perm.edit_context_desc', 1),
(40, 1, 'edit_document', 'perm.edit_document_desc', 1),
(41, 1, 'edit_weblink', 'perm.edit_weblink_desc', 1),
(42, 1, 'edit_symlink', 'perm.edit_symlink_desc', 1),
(43, 1, 'edit_static_resource', 'perm.edit_static_resource_desc', 1),
(44, 1, 'edit_locked', 'perm.edit_locked_desc', 1),
(45, 1, 'edit_plugin', 'perm.edit_plugin_desc', 1),
(46, 1, 'edit_propertyset', 'perm.edit_propertyset_desc', 1),
(47, 1, 'edit_role', 'perm.edit_role_desc', 1),
(48, 1, 'edit_snippet', 'perm.edit_snippet_desc', 1),
(49, 1, 'edit_template', 'perm.edit_template_desc', 1),
(50, 1, 'edit_tv', 'perm.edit_tv_desc', 1),
(51, 1, 'edit_user', 'perm.edit_user_desc', 1),
(52, 1, 'element_tree', 'perm.element_tree_desc', 1),
(53, 1, 'empty_cache', 'perm.empty_cache_desc', 1),
(54, 1, 'error_log_erase', 'perm.error_log_erase_desc', 1),
(55, 1, 'error_log_view', 'perm.error_log_view_desc', 1),
(56, 1, 'export_static', 'perm.export_static_desc', 1),
(57, 1, 'file_create', 'perm.file_create_desc', 1),
(58, 1, 'file_list', 'perm.file_list_desc', 1),
(59, 1, 'file_manager', 'perm.file_manager_desc', 1),
(60, 1, 'file_remove', 'perm.file_remove_desc', 1),
(61, 1, 'file_tree', 'perm.file_tree_desc', 1),
(62, 1, 'file_update', 'perm.file_update_desc', 1),
(63, 1, 'file_upload', 'perm.file_upload_desc', 1),
(64, 1, 'file_unpack', 'perm.file_unpack_desc', 1),
(65, 1, 'file_view', 'perm.file_view_desc', 1),
(66, 1, 'flush_sessions', 'perm.flush_sessions_desc', 1),
(67, 1, 'frames', 'perm.frames_desc', 1),
(68, 1, 'help', 'perm.help_desc', 1),
(69, 1, 'home', 'perm.home_desc', 1),
(70, 1, 'language', 'perm.language_desc', 1),
(71, 1, 'languages', 'perm.languages_desc', 1),
(72, 1, 'lexicons', 'perm.lexicons_desc', 1),
(73, 1, 'list', 'perm.list_desc', 1),
(74, 1, 'load', 'perm.load_desc', 1),
(75, 1, 'logout', 'perm.logout_desc', 1),
(76, 1, 'mgr_log_view', 'perm.mgr_log_view_desc', 1),
(77, 1, 'mgr_log_erase', 'perm.mgr_log_erase_desc', 1),
(78, 1, 'menu_reports', 'perm.menu_reports_desc', 1),
(79, 1, 'menu_security', 'perm.menu_security_desc', 1),
(80, 1, 'menu_site', 'perm.menu_site_desc', 1),
(81, 1, 'menu_support', 'perm.menu_support_desc', 1),
(82, 1, 'menu_system', 'perm.menu_system_desc', 1),
(83, 1, 'menu_tools', 'perm.menu_tools_desc', 1),
(84, 1, 'menu_trash', 'perm.menu_trash_desc', 1),
(85, 1, 'menu_user', 'perm.menu_user_desc', 1),
(86, 1, 'menus', 'perm.menus_desc', 1),
(87, 1, 'messages', 'perm.messages_desc', 1),
(88, 1, 'namespaces', 'perm.namespaces_desc', 1),
(89, 1, 'new_category', 'perm.new_category_desc', 1),
(90, 1, 'new_chunk', 'perm.new_chunk_desc', 1),
(91, 1, 'new_context', 'perm.new_context_desc', 1),
(92, 1, 'new_document', 'perm.new_document_desc', 1),
(93, 1, 'new_static_resource', 'perm.new_static_resource_desc', 1),
(94, 1, 'new_symlink', 'perm.new_symlink_desc', 1),
(95, 1, 'new_weblink', 'perm.new_weblink_desc', 1),
(96, 1, 'new_document_in_root', 'perm.new_document_in_root_desc', 1),
(97, 1, 'new_plugin', 'perm.new_plugin_desc', 1),
(98, 1, 'new_propertyset', 'perm.new_propertyset_desc', 1),
(99, 1, 'new_role', 'perm.new_role_desc', 1),
(100, 1, 'new_snippet', 'perm.new_snippet_desc', 1),
(101, 1, 'new_template', 'perm.new_template_desc', 1),
(102, 1, 'new_tv', 'perm.new_tv_desc', 1),
(103, 1, 'new_user', 'perm.new_user_desc', 1),
(104, 1, 'packages', 'perm.packages_desc', 1),
(105, 1, 'policy_delete', 'perm.policy_delete_desc', 1),
(106, 1, 'policy_edit', 'perm.policy_edit_desc', 1),
(107, 1, 'policy_new', 'perm.policy_new_desc', 1),
(108, 1, 'policy_save', 'perm.policy_save_desc', 1),
(109, 1, 'policy_view', 'perm.policy_view_desc', 1),
(110, 1, 'policy_template_delete', 'perm.policy_template_delete_desc', 1),
(111, 1, 'policy_template_edit', 'perm.policy_template_edit_desc', 1),
(112, 1, 'policy_template_new', 'perm.policy_template_new_desc', 1),
(113, 1, 'policy_template_save', 'perm.policy_template_save_desc', 1),
(114, 1, 'policy_template_view', 'perm.policy_template_view_desc', 1),
(115, 1, 'property_sets', 'perm.property_sets_desc', 1),
(116, 1, 'providers', 'perm.providers_desc', 1),
(117, 1, 'publish_document', 'perm.publish_document_desc', 1),
(118, 1, 'purge_deleted', 'perm.purge_deleted_desc', 1),
(119, 1, 'remove', 'perm.remove_desc', 1),
(120, 1, 'remove_locks', 'perm.remove_locks_desc', 1),
(121, 1, 'resource_duplicate', 'perm.resource_duplicate_desc', 1),
(122, 1, 'resourcegroup_delete', 'perm.resourcegroup_delete_desc', 1),
(123, 1, 'resourcegroup_edit', 'perm.resourcegroup_edit_desc', 1),
(124, 1, 'resourcegroup_new', 'perm.resourcegroup_new_desc', 1),
(125, 1, 'resourcegroup_resource_edit', 'perm.resourcegroup_resource_edit_desc', 1),
(126, 1, 'resourcegroup_resource_list', 'perm.resourcegroup_resource_list_desc', 1),
(127, 1, 'resourcegroup_save', 'perm.resourcegroup_save_desc', 1),
(128, 1, 'resourcegroup_view', 'perm.resourcegroup_view_desc', 1),
(129, 1, 'resource_quick_create', 'perm.resource_quick_create_desc', 1),
(130, 1, 'resource_quick_update', 'perm.resource_quick_update_desc', 1),
(131, 1, 'resource_tree', 'perm.resource_tree_desc', 1),
(132, 1, 'save', 'perm.save_desc', 1),
(133, 1, 'save_category', 'perm.save_category_desc', 1),
(134, 1, 'save_chunk', 'perm.save_chunk_desc', 1),
(135, 1, 'save_context', 'perm.save_context_desc', 1),
(136, 1, 'save_document', 'perm.save_document_desc', 1),
(137, 1, 'save_plugin', 'perm.save_plugin_desc', 1),
(138, 1, 'save_propertyset', 'perm.save_propertyset_desc', 1),
(139, 1, 'save_role', 'perm.save_role_desc', 1),
(140, 1, 'save_snippet', 'perm.save_snippet_desc', 1),
(141, 1, 'save_template', 'perm.save_template_desc', 1),
(142, 1, 'save_tv', 'perm.save_tv_desc', 1),
(143, 1, 'save_user', 'perm.save_user_desc', 1),
(144, 1, 'search', 'perm.search_desc', 1),
(145, 1, 'set_sudo', 'perm.set_sudo_desc', 1),
(146, 1, 'settings', 'perm.settings_desc', 1),
(147, 1, 'events', 'perm.events_desc', 1),
(148, 1, 'source_save', 'perm.source_save_desc', 1),
(149, 1, 'source_delete', 'perm.source_delete_desc', 1),
(150, 1, 'source_edit', 'perm.source_edit_desc', 1),
(151, 1, 'source_view', 'perm.source_view_desc', 1),
(152, 1, 'sources', 'perm.sources_desc', 1),
(153, 1, 'steal_locks', 'perm.steal_locks_desc', 1),
(154, 1, 'tree_show_element_ids', 'perm.tree_show_element_ids_desc', 1),
(155, 1, 'tree_show_resource_ids', 'perm.tree_show_resource_ids_desc', 1),
(156, 1, 'undelete_document', 'perm.undelete_document_desc', 1),
(157, 1, 'unpublish_document', 'perm.unpublish_document_desc', 1),
(158, 1, 'unlock_element_properties', 'perm.unlock_element_properties_desc', 1),
(159, 1, 'usergroup_delete', 'perm.usergroup_delete_desc', 1),
(160, 1, 'usergroup_edit', 'perm.usergroup_edit_desc', 1),
(161, 1, 'usergroup_new', 'perm.usergroup_new_desc', 1),
(162, 1, 'usergroup_save', 'perm.usergroup_save_desc', 1),
(163, 1, 'usergroup_user_edit', 'perm.usergroup_user_edit_desc', 1),
(164, 1, 'usergroup_user_list', 'perm.usergroup_user_list_desc', 1),
(165, 1, 'usergroup_view', 'perm.usergroup_view_desc', 1),
(166, 1, 'view', 'perm.view_desc', 1),
(167, 1, 'view_category', 'perm.view_category_desc', 1),
(168, 1, 'view_chunk', 'perm.view_chunk_desc', 1),
(169, 1, 'view_context', 'perm.view_context_desc', 1),
(170, 1, 'view_document', 'perm.view_document_desc', 1),
(171, 1, 'view_element', 'perm.view_element_desc', 1),
(172, 1, 'view_eventlog', 'perm.view_eventlog_desc', 1),
(173, 1, 'view_offline', 'perm.view_offline_desc', 1),
(174, 1, 'view_plugin', 'perm.view_plugin_desc', 1),
(175, 1, 'view_propertyset', 'perm.view_propertyset_desc', 1),
(176, 1, 'view_role', 'perm.view_role_desc', 1),
(177, 1, 'view_snippet', 'perm.view_snippet_desc', 1),
(178, 1, 'view_sysinfo', 'perm.view_sysinfo_desc', 1),
(179, 1, 'view_template', 'perm.view_template_desc', 1),
(180, 1, 'view_tv', 'perm.view_tv_desc', 1),
(181, 1, 'view_user', 'perm.view_user_desc', 1),
(182, 1, 'view_unpublished', 'perm.view_unpublished_desc', 1),
(183, 1, 'workspaces', 'perm.workspaces_desc', 1),
(184, 2, 'add_children', 'perm.add_children_desc', 1),
(185, 2, 'copy', 'perm.copy_desc', 1),
(186, 2, 'create', 'perm.create_desc', 1),
(187, 2, 'delete', 'perm.delete_desc', 1),
(188, 2, 'list', 'perm.list_desc', 1),
(189, 2, 'load', 'perm.load_desc', 1),
(190, 2, 'move', 'perm.move_desc', 1),
(191, 2, 'publish', 'perm.publish_desc', 1),
(192, 2, 'remove', 'perm.remove_desc', 1),
(193, 2, 'save', 'perm.save_desc', 1),
(194, 2, 'steal_lock', 'perm.steal_lock_desc', 1),
(195, 2, 'undelete', 'perm.undelete_desc', 1),
(196, 2, 'unpublish', 'perm.unpublish_desc', 1),
(197, 2, 'view', 'perm.view_desc', 1),
(198, 3, 'load', 'perm.load_desc', 1),
(199, 3, 'list', 'perm.list_desc', 1),
(200, 3, 'view', 'perm.view_desc', 1),
(201, 3, 'save', 'perm.save_desc', 1),
(202, 3, 'remove', 'perm.remove_desc', 1),
(203, 4, 'add_children', 'perm.add_children_desc', 1),
(204, 4, 'create', 'perm.create_desc', 1),
(205, 4, 'copy', 'perm.copy_desc', 1),
(206, 4, 'delete', 'perm.delete_desc', 1),
(207, 4, 'list', 'perm.list_desc', 1),
(208, 4, 'load', 'perm.load_desc', 1),
(209, 4, 'remove', 'perm.remove_desc', 1),
(210, 4, 'save', 'perm.save_desc', 1),
(211, 4, 'view', 'perm.view_desc', 1),
(212, 5, 'create', 'perm.create_desc', 1),
(213, 5, 'copy', 'perm.copy_desc', 1),
(214, 5, 'list', 'perm.list_desc', 1),
(215, 5, 'load', 'perm.load_desc', 1),
(216, 5, 'remove', 'perm.remove_desc', 1),
(217, 5, 'save', 'perm.save_desc', 1),
(218, 5, 'view', 'perm.view_desc', 1),
(219, 6, 'load', 'perm.load_desc', 1),
(220, 6, 'list', 'perm.list_desc', 1),
(221, 6, 'view', 'perm.view_desc', 1),
(222, 6, 'save', 'perm.save_desc', 1),
(223, 6, 'remove', 'perm.remove_desc', 1),
(224, 6, 'view_unpublished', 'perm.view_unpublished_desc', 1),
(225, 6, 'copy', 'perm.copy_desc', 1),
(226, 7, 'list', 'perm.list_desc', 1),
(227, 7, 'load', 'perm.load_desc', 1),
(228, 7, 'view', 'perm.view_desc', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_policies`
--

CREATE TABLE `modx_access_policies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `template` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `class` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `data` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lexicon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'permissions'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_access_policies`
--

INSERT INTO `modx_access_policies` (`id`, `name`, `description`, `parent`, `template`, `class`, `data`, `lexicon`) VALUES
(1, 'Resource', 'policy_resource_desc', 0, 2, '', '{\"add_children\":true,\"create\":true,\"copy\":true,\"delete\":true,\"list\":true,\"load\":true,\"move\":true,\"publish\":true,\"remove\":true,\"save\":true,\"steal_lock\":true,\"undelete\":true,\"unpublish\":true,\"view\":true}', 'permissions'),
(2, 'Administrator', 'policy_administrator_desc', 0, 1, '', '{\"about\":true,\"access_permissions\":true,\"actions\":true,\"change_password\":true,\"change_profile\":true,\"charsets\":true,\"class_map\":true,\"components\":true,\"content_types\":true,\"countries\":true,\"create\":true,\"credits\":true,\"customize_forms\":true,\"dashboards\":true,\"database\":true,\"database_truncate\":true,\"delete_category\":true,\"delete_chunk\":true,\"delete_context\":true,\"delete_document\":true,\"delete_eventlog\":true,\"delete_plugin\":true,\"delete_propertyset\":true,\"delete_role\":true,\"delete_snippet\":true,\"delete_static_resource\":true,\"delete_symlink\":true,\"delete_template\":true,\"delete_tv\":true,\"delete_user\":true,\"delete_weblink\":true,\"directory_chmod\":true,\"directory_create\":true,\"directory_list\":true,\"directory_remove\":true,\"directory_update\":true,\"edit_category\":true,\"edit_chunk\":true,\"edit_context\":true,\"edit_document\":true,\"edit_locked\":true,\"edit_plugin\":true,\"edit_propertyset\":true,\"edit_role\":true,\"edit_snippet\":true,\"edit_static_resource\":true,\"edit_symlink\":true,\"edit_template\":true,\"edit_tv\":true,\"edit_user\":true,\"edit_weblink\":true,\"element_tree\":true,\"empty_cache\":true,\"error_log_erase\":true,\"error_log_view\":true,\"events\":true,\"export_static\":true,\"file_create\":true,\"file_list\":true,\"file_manager\":true,\"file_remove\":true,\"file_tree\":true,\"file_unpack\":true,\"file_update\":true,\"file_upload\":true,\"file_view\":true,\"flush_sessions\":true,\"frames\":true,\"help\":true,\"home\":true,\"language\":true,\"languages\":true,\"lexicons\":true,\"list\":true,\"load\":true,\"logout\":true,\"mgr_log_view\":true,\"mgr_log_erase\":true,\"menu_reports\":true,\"menu_security\":true,\"menu_site\":true,\"menu_support\":true,\"menu_system\":true,\"menu_tools\":true,\"menu_trash\":true,\"menu_user\":true,\"menus\":true,\"messages\":true,\"namespaces\":true,\"new_category\":true,\"new_chunk\":true,\"new_context\":true,\"new_document\":true,\"new_document_in_root\":true,\"new_plugin\":true,\"new_propertyset\":true,\"new_role\":true,\"new_snippet\":true,\"new_static_resource\":true,\"new_symlink\":true,\"new_template\":true,\"new_tv\":true,\"new_user\":true,\"new_weblink\":true,\"packages\":true,\"policy_delete\":true,\"policy_edit\":true,\"policy_new\":true,\"policy_save\":true,\"policy_template_delete\":true,\"policy_template_edit\":true,\"policy_template_new\":true,\"policy_template_save\":true,\"policy_template_view\":true,\"policy_view\":true,\"property_sets\":true,\"providers\":true,\"publish_document\":true,\"purge_deleted\":true,\"remove\":true,\"remove_locks\":true,\"resource_duplicate\":true,\"resource_quick_create\":true,\"resource_quick_update\":true,\"resource_tree\":true,\"resourcegroup_delete\":true,\"resourcegroup_edit\":true,\"resourcegroup_new\":true,\"resourcegroup_resource_edit\":true,\"resourcegroup_resource_list\":true,\"resourcegroup_save\":true,\"resourcegroup_view\":true,\"save\":true,\"save_category\":true,\"save_chunk\":true,\"save_context\":true,\"save_document\":true,\"save_plugin\":true,\"save_propertyset\":true,\"save_role\":true,\"save_snippet\":true,\"save_template\":true,\"save_tv\":true,\"save_user\":true,\"search\":true,\"set_sudo\":true,\"settings\":true,\"source_delete\":true,\"source_edit\":true,\"source_save\":true,\"source_view\":true,\"sources\":true,\"steal_locks\":true,\"tree_show_element_ids\":true,\"tree_show_resource_ids\":true,\"undelete_document\":true,\"unlock_element_properties\":true,\"unpublish_document\":true,\"usergroup_delete\":true,\"usergroup_edit\":true,\"usergroup_new\":true,\"usergroup_save\":true,\"usergroup_user_edit\":true,\"usergroup_user_list\":true,\"usergroup_view\":true,\"view\":true,\"view_category\":true,\"view_chunk\":true,\"view_context\":true,\"view_document\":true,\"view_element\":true,\"view_eventlog\":true,\"view_offline\":true,\"view_plugin\":true,\"view_propertyset\":true,\"view_role\":true,\"view_snippet\":true,\"view_sysinfo\":true,\"view_template\":true,\"view_tv\":true,\"view_unpublished\":true,\"view_user\":true,\"workspaces\":true}', 'permissions'),
(3, 'Load Only', 'policy_load_only_desc', 0, 3, '', '{\"load\":true}', 'permissions'),
(4, 'Load, List and View', 'policy_load_list_and_view_desc', 0, 3, '', '{\"load\":true,\"list\":true,\"view\":true}', 'permissions'),
(5, 'Object', 'policy_object_desc', 0, 3, '', '{\"load\":true,\"list\":true,\"view\":true,\"save\":true,\"remove\":true}', 'permissions'),
(6, 'Element', 'policy_element_desc', 0, 4, '', '{\"add_children\":true,\"create\":true,\"delete\":true,\"list\":true,\"load\":true,\"remove\":true,\"save\":true,\"view\":true,\"copy\":true}', 'permissions'),
(7, 'Content Editor', 'policy_content_editor_desc', 0, 1, '', '{\"change_profile\":true,\"class_map\":true,\"countries\":true,\"delete_document\":true,\"delete_static_resource\":true,\"delete_symlink\":true,\"delete_weblink\":true,\"edit_document\":true,\"edit_static_resource\":true,\"edit_symlink\":true,\"edit_weblink\":true,\"frames\":true,\"help\":true,\"home\":true,\"language\":true,\"list\":true,\"load\":true,\"logout\":true,\"menu_reports\":true,\"menu_site\":true,\"menu_support\":true,\"menu_tools\":true,\"menu_user\":true,\"new_document\":true,\"new_static_resource\":true,\"new_symlink\":true,\"new_weblink\":true,\"resource_duplicate\":true,\"resource_tree\":true,\"save_document\":true,\"source_view\":true,\"tree_show_resource_ids\":true,\"view\":true,\"view_document\":true,\"view_template\":true}', 'permissions'),
(8, 'Media Source Admin', 'policy_media_source_admin_desc', 0, 5, '', '{\"create\":true,\"copy\":true,\"load\":true,\"list\":true,\"save\":true,\"remove\":true,\"view\":true}', 'permissions'),
(9, 'Media Source User', 'policy_media_source_user_desc', 0, 5, '', '{\"load\":true,\"list\":true,\"view\":true}', 'permissions'),
(10, 'Developer', 'policy_developer_desc', 0, 1, '', '{\"about\":true,\"change_password\":true,\"change_profile\":true,\"charsets\":true,\"class_map\":true,\"components\":true,\"content_types\":true,\"countries\":true,\"create\":true,\"credits\":true,\"customize_forms\":true,\"dashboards\":true,\"database\":true,\"delete_category\":true,\"delete_chunk\":true,\"delete_context\":true,\"delete_document\":true,\"delete_eventlog\":true,\"delete_plugin\":true,\"delete_propertyset\":true,\"delete_role\":true,\"delete_snippet\":true,\"delete_template\":true,\"delete_tv\":true,\"delete_user\":true,\"directory_chmod\":true,\"directory_create\":true,\"directory_list\":true,\"directory_remove\":true,\"directory_update\":true,\"edit_category\":true,\"edit_chunk\":true,\"edit_context\":true,\"edit_document\":true,\"edit_locked\":true,\"edit_plugin\":true,\"edit_propertyset\":true,\"edit_role\":true,\"edit_snippet\":true,\"edit_static_resource\":true,\"edit_symlink\":true,\"edit_template\":true,\"edit_tv\":true,\"edit_user\":true,\"edit_weblink\":true,\"element_tree\":true,\"empty_cache\":true,\"error_log_erase\":true,\"error_log_view\":true,\"export_static\":true,\"file_create\":true,\"file_list\":true,\"file_manager\":true,\"file_remove\":true,\"file_tree\":true,\"file_unpack\":true,\"file_update\":true,\"file_upload\":true,\"file_view\":true,\"frames\":true,\"help\":true,\"home\":true,\"language\":true,\"languages\":true,\"lexicons\":true,\"list\":true,\"load\":true,\"logout\":true,\"mgr_log_view\":true,\"mgr_log_erase\":true,\"menu_reports\":true,\"menu_site\":true,\"menu_support\":true,\"menu_system\":true,\"menu_tools\":true,\"menu_user\":true,\"menus\":true,\"messages\":true,\"namespaces\":true,\"new_category\":true,\"new_chunk\":true,\"new_context\":true,\"new_document\":true,\"new_document_in_root\":true,\"new_plugin\":true,\"new_propertyset\":true,\"new_role\":true,\"new_snippet\":true,\"new_static_resource\":true,\"new_symlink\":true,\"new_template\":true,\"new_tv\":true,\"new_user\":true,\"new_weblink\":true,\"packages\":true,\"property_sets\":true,\"providers\":true,\"publish_document\":true,\"purge_deleted\":true,\"remove\":true,\"resource_duplicate\":true,\"resource_quick_create\":true,\"resource_quick_update\":true,\"resource_tree\":true,\"save\":true,\"save_category\":true,\"save_chunk\":true,\"save_context\":true,\"save_document\":true,\"save_plugin\":true,\"save_propertyset\":true,\"save_snippet\":true,\"save_template\":true,\"save_tv\":true,\"save_user\":true,\"search\":true,\"settings\":true,\"source_delete\":true,\"source_edit\":true,\"source_save\":true,\"source_view\":true,\"sources\":true,\"tree_show_element_ids\":true,\"tree_show_resource_ids\":true,\"undelete_document\":true,\"unlock_element_properties\":true,\"unpublish_document\":true,\"view\":true,\"view_category\":true,\"view_chunk\":true,\"view_context\":true,\"view_document\":true,\"view_element\":true,\"view_eventlog\":true,\"view_offline\":true,\"view_plugin\":true,\"view_propertyset\":true,\"view_role\":true,\"view_snippet\":true,\"view_sysinfo\":true,\"view_template\":true,\"view_tv\":true,\"view_unpublished\":true,\"view_user\":true,\"workspaces\":true}', 'permissions'),
(11, 'Context', 'policy_context_desc', 0, 6, '', '{\"load\":true,\"list\":true,\"view\":true,\"save\":true,\"remove\":true,\"copy\":true,\"view_unpublished\":true}', 'permissions'),
(12, 'Hidden Namespace', 'policy_hidden_namespace_desc', 0, 7, '', '{\"load\":false,\"list\":false,\"view\":true}', 'permissions');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_policy_templates`
--

CREATE TABLE `modx_access_policy_templates` (
  `id` int(10) UNSIGNED NOT NULL,
  `template_group` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lexicon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'permissions'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_access_policy_templates`
--

INSERT INTO `modx_access_policy_templates` (`id`, `template_group`, `name`, `description`, `lexicon`) VALUES
(1, 1, 'AdministratorTemplate', 'policy_template_administrator_desc', 'permissions'),
(2, 3, 'ResourceTemplate', 'policy_template_resource_desc', 'permissions'),
(3, 2, 'ObjectTemplate', 'policy_template_object_desc', 'permissions'),
(4, 4, 'ElementTemplate', 'policy_template_element_desc', 'permissions'),
(5, 5, 'MediaSourceTemplate', 'policy_template_mediasource_desc', 'permissions'),
(6, 7, 'ContextTemplate', 'policy_template_context_desc', 'permissions'),
(7, 6, 'NamespaceTemplate', 'policy_template_namespace_desc', 'permissions');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_policy_template_groups`
--

CREATE TABLE `modx_access_policy_template_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_access_policy_template_groups`
--

INSERT INTO `modx_access_policy_template_groups` (`id`, `name`, `description`) VALUES
(1, 'Administrator', 'policy_template_group_administrator_desc'),
(2, 'Object', 'policy_template_group_object_desc'),
(3, 'Resource', 'policy_template_group_resource_desc'),
(4, 'Element', 'policy_template_group_element_desc'),
(5, 'MediaSource', 'policy_template_group_mediasource_desc'),
(6, 'Namespace', 'policy_template_group_namespace_desc'),
(7, 'Context', 'policy_template_group_context_desc');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_resources`
--

CREATE TABLE `modx_access_resources` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_resource_groups`
--

CREATE TABLE `modx_access_resource_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_access_templatevars`
--

CREATE TABLE `modx_access_templatevars` (
  `id` int(10) UNSIGNED NOT NULL,
  `target` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `principal_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modPrincipal',
  `principal` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999,
  `policy` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_actiondom`
--

CREATE TABLE `modx_actiondom` (
  `id` int(10) UNSIGNED NOT NULL,
  `set` int(11) NOT NULL DEFAULT 0,
  `action` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `xtype` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `container` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `rule` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `constraint` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `constraint_field` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `constraint_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `for_parent` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_actions_fields`
--

CREATE TABLE `modx_actions_fields` (
  `id` int(10) UNSIGNED NOT NULL,
  `action` varchar(191) CHARACTER SET utf8mb3 NOT NULL DEFAULT '',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'field',
  `tab` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `form` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `other` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `rank` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_actions_fields`
--

INSERT INTO `modx_actions_fields` (`id`, `action`, `name`, `type`, `tab`, `form`, `other`, `rank`) VALUES
(1, 'resource/update', 'modx-resource-settings', 'tab', '', 'modx-panel-resource', '', 0),
(2, 'resource/update', 'modx-resource-main-left', 'tab', '', 'modx-panel-resource', '', 1),
(3, 'resource/update', 'id', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 0),
(4, 'resource/update', 'pagetitle', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 1),
(5, 'resource/update', 'alias', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 2),
(6, 'resource/update', 'longtitle', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 3),
(7, 'resource/update', 'description', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 4),
(8, 'resource/update', 'introtext', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 5),
(9, 'resource/update', 'modx-resource-content', 'field', 'modx-resource-content', 'modx-panel-resource', '', 0),
(10, 'resource/update', 'modx-resource-main-right', 'tab', '', 'modx-panel-resource', '', 3),
(11, 'resource/update', 'modx-resource-main-right-top', 'tab', '', 'modx-panel-resource', '', 4),
(12, 'resource/update', 'published', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 0),
(13, 'resource/update', 'deleted', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 1),
(14, 'resource/update', 'publishedon', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 2),
(15, 'resource/update', 'pub_date', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 3),
(16, 'resource/update', 'unpub_date', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 4),
(17, 'resource/update', 'modx-resource-main-right-middle', 'tab', '', 'modx-panel-resource', '', 5),
(18, 'resource/update', 'template', 'field', 'modx-resource-main-right-middle', 'modx-panel-resource', '', 0),
(19, 'resource/update', 'modx-resource-main-right-bottom', 'tab', '', 'modx-panel-resource', '', 6),
(20, 'resource/update', 'hidemenu', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 0),
(21, 'resource/update', 'menutitle', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 1),
(22, 'resource/update', 'link_attributes', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 2),
(23, 'resource/update', 'menuindex', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 3),
(24, 'resource/update', 'modx-page-settings', 'tab', '', 'modx-panel-resource', '', 7),
(25, 'resource/update', 'modx-page-settings-left', 'tab', '', 'modx-panel-resource', '', 8),
(26, 'resource/update', 'class_key', 'field', 'modx-page-settings-left', 'modx-panel-resource', '', 0),
(27, 'resource/update', 'content_type', 'field', 'modx-page-settings-left', 'modx-panel-resource', '', 1),
(28, 'resource/update', 'modx-page-settings-right', 'tab', '', 'modx-panel-resource', '', 9),
(29, 'resource/update', 'parent-cmb', 'field', 'modx-page-settings-right', 'modx-panel-resource', '', 0),
(30, 'resource/update', 'content_dispo', 'field', 'modx-page-settings-right', 'modx-panel-resource', '', 1),
(31, 'resource/update', 'modx-page-settings-box-left', 'tab', '', 'modx-panel-resource', '', 10),
(32, 'resource/update', 'isfolder', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 0),
(33, 'resource/update', 'show_in_tree', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 1),
(34, 'resource/update', 'hide_children_in_tree', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 2),
(35, 'resource/update', 'alias_visible', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 3),
(36, 'resource/update', 'uri_override', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 4),
(37, 'resource/update', 'uri', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 5),
(38, 'resource/update', 'modx-page-settings-box-right', 'tab', '', 'modx-panel-resource', '', 11),
(39, 'resource/update', 'richtext', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 0),
(40, 'resource/update', 'cacheable', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 1),
(41, 'resource/update', 'searchable', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 2),
(42, 'resource/update', 'syncsite', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 3),
(43, 'resource/update', 'modx-panel-resource-tv', 'tab', '', 'modx-panel-resource', 'tv', 12),
(44, 'resource/update', 'modx-resource-access-permissions', 'tab', '', 'modx-panel-resource', '', 13),
(45, 'resource/create', 'modx-resource-settings', 'tab', '', 'modx-panel-resource', '', 0),
(46, 'resource/create', 'modx-resource-main-left', 'tab', '', 'modx-panel-resource', '', 1),
(47, 'resource/create', 'id', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 0),
(48, 'resource/create', 'pagetitle', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 1),
(49, 'resource/create', 'alias', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 2),
(50, 'resource/create', 'longtitle', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 3),
(51, 'resource/create', 'description', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 4),
(52, 'resource/create', 'introtext', 'field', 'modx-resource-main-left', 'modx-panel-resource', '', 5),
(53, 'resource/create', 'modx-resource-content', 'field', 'modx-resource-content', 'modx-panel-resource', '', 0),
(54, 'resource/create', 'modx-resource-main-right', 'tab', '', 'modx-panel-resource', '', 3),
(55, 'resource/create', 'modx-resource-main-right-top', 'tab', '', 'modx-panel-resource', '', 4),
(56, 'resource/create', 'published', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 0),
(57, 'resource/create', 'deleted', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 1),
(58, 'resource/create', 'publishedon', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 2),
(59, 'resource/create', 'pub_date', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 3),
(60, 'resource/create', 'unpub_date', 'field', 'modx-resource-main-right-top', 'modx-panel-resource', '', 4),
(61, 'resource/create', 'modx-resource-main-right-middle', 'tab', '', 'modx-panel-resource', '', 5),
(62, 'resource/create', 'template', 'field', 'modx-resource-main-right-middle', 'modx-panel-resource', '', 0),
(63, 'resource/create', 'modx-resource-main-right-bottom', 'tab', '', 'modx-panel-resource', '', 6),
(64, 'resource/create', 'hidemenu', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 0),
(65, 'resource/create', 'menutitle', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 1),
(66, 'resource/create', 'link_attributes', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 2),
(67, 'resource/create', 'menuindex', 'field', 'modx-resource-main-right-bottom', 'modx-panel-resource', '', 3),
(68, 'resource/create', 'modx-page-settings', 'tab', '', 'modx-panel-resource', '', 7),
(69, 'resource/create', 'modx-page-settings-left', 'tab', '', 'modx-panel-resource', '', 8),
(70, 'resource/create', 'class_key', 'field', 'modx-page-settings-left', 'modx-panel-resource', '', 0),
(71, 'resource/create', 'content_type', 'field', 'modx-page-settings-left', 'modx-panel-resource', '', 1),
(72, 'resource/create', 'modx-page-settings-right', 'tab', '', 'modx-panel-resource', '', 9),
(73, 'resource/create', 'parent-cmb', 'field', 'modx-page-settings-right', 'modx-panel-resource', '', 0),
(74, 'resource/create', 'content_dispo', 'field', 'modx-page-settings-right', 'modx-panel-resource', '', 1),
(75, 'resource/create', 'modx-page-settings-box-left', 'tab', '', 'modx-panel-resource', '', 10),
(76, 'resource/create', 'isfolder', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 0),
(77, 'resource/create', 'show_in_tree', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 1),
(78, 'resource/create', 'hide_children_in_tree', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 2),
(79, 'resource/create', 'alias_visible', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 3),
(80, 'resource/create', 'uri_override', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 4),
(81, 'resource/create', 'uri', 'field', 'modx-page-settings-box-left', 'modx-panel-resource', '', 5),
(82, 'resource/create', 'modx-page-settings-box-right', 'tab', '', 'modx-panel-resource', '', 11),
(83, 'resource/create', 'richtext', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 0),
(84, 'resource/create', 'cacheable', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 1),
(85, 'resource/create', 'searchable', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 2),
(86, 'resource/create', 'syncsite', 'field', 'modx-page-settings-box-right', 'modx-panel-resource', '', 3),
(87, 'resource/create', 'modx-panel-resource-tv', 'tab', '', 'modx-panel-resource', 'tv', 12),
(88, 'resource/create', 'modx-resource-access-permissions', 'tab', '', 'modx-panel-resource', '', 13);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_active_users`
--

CREATE TABLE `modx_active_users` (
  `internalKey` int(9) UNSIGNED NOT NULL DEFAULT 0,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lasthit` int(20) NOT NULL DEFAULT 0,
  `id` int(10) DEFAULT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ip` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_categories`
--

CREATE TABLE `modx_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `parent` int(10) UNSIGNED DEFAULT 0,
  `category` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `rank` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_categories_closure`
--

CREATE TABLE `modx_categories_closure` (
  `ancestor` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `descendant` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `depth` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_content_type`
--

CREATE TABLE `modx_content_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mime_type` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_extensions` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `headers` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `binary` tinyint(1) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_content_type`
--

INSERT INTO `modx_content_type` (`id`, `name`, `description`, `mime_type`, `file_extensions`, `icon`, `headers`, `binary`) VALUES
(1, 'HTML', 'HTML content', 'text/html', '', '', NULL, 0),
(2, 'XML', 'XML content', 'text/xml', '.xml', 'icon-xml', NULL, 0),
(3, 'Text', 'Plain text content', 'text/plain', '.txt', 'icon-txt', NULL, 0),
(4, 'CSS', 'CSS content', 'text/css', '.css', 'icon-css', NULL, 0),
(5, 'JavaScript', 'JavaScript content', 'text/javascript', '.js', 'icon-js', NULL, 0),
(6, 'RSS', 'For RSS feeds', 'application/rss+xml', '.rss', 'icon-rss', NULL, 0),
(7, 'JSON', 'JSON', 'application/json', '.json', 'icon-json', NULL, 0),
(8, 'PDF', 'PDF Files', 'application/pdf', '.pdf', 'icon-pdf', NULL, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_context`
--

CREATE TABLE `modx_context` (
  `key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rank` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_context`
--

INSERT INTO `modx_context` (`key`, `name`, `description`, `rank`) VALUES
('mgr', 'Manager', 'The default manager or administration context for content management activity.', 0),
('web', 'Website', 'The default front-end context for your web site.', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_context_resource`
--

CREATE TABLE `modx_context_resource` (
  `context_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resource` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_context_setting`
--

CREATE TABLE `modx_context_setting` (
  `context_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `xtype` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'textfield',
  `namespace` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editedon` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_context_setting`
--

INSERT INTO `modx_context_setting` (`context_key`, `key`, `value`, `xtype`, `namespace`, `area`, `editedon`) VALUES
('mgr', 'allow_tags_in_post', '1', 'combo-boolean', 'core', 'system', NULL),
('mgr', 'modRequest.class', 'MODX\\Revolution\\modManagerRequest', 'textfield', 'core', 'system', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_dashboard`
--

CREATE TABLE `modx_dashboard` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hide_trees` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `customizable` tinyint(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_dashboard`
--

INSERT INTO `modx_dashboard` (`id`, `name`, `description`, `hide_trees`, `customizable`) VALUES
(1, 'Default', '', 0, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_dashboard_widget`
--

CREATE TABLE `modx_dashboard_widget` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `namespace` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lexicon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core:dashboards',
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'half',
  `permission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_dashboard_widget`
--

INSERT INTO `modx_dashboard_widget` (`id`, `name`, `description`, `type`, `content`, `properties`, `namespace`, `lexicon`, `size`, `permission`) VALUES
(1, 'w_newsfeed', 'w_newsfeed_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.modx-news.php', NULL, 'core', 'core:dashboards', 'one-third', ''),
(2, 'w_securityfeed', 'w_securityfeed_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.modx-security.php', NULL, 'core', 'core:dashboards', 'one-third', ''),
(3, 'w_whosonline', 'w_whosonline_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.grid-online.php', NULL, 'core', 'core:dashboards', 'one-third', ''),
(4, 'w_recentlyeditedresources', 'w_recentlyeditedresources_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.grid-rer.php', NULL, 'core', 'core:dashboards', 'two-thirds', 'view_document'),
(5, 'w_configcheck', 'w_configcheck_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.configcheck.php', NULL, 'core', 'core:dashboards', 'full', ''),
(6, 'w_buttons', 'w_buttons_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.buttons.php', '{\"create-resource\":{\"link\":\"[[++manager_url]]?a=resource\\/create\",\"icon\":\"file-o\",\"title\":\"[[%action_new_resource]]\",\"description\":\"[[%action_new_resource_desc]]\"},\"view-site\":{\"link\":\"[[++site_url]]\",\"icon\":\"eye\",\"title\":\"[[%action_view_website]]\",\"description\":\"[[%action_view_website_desc]]\",\"target\":\"_blank\"},\"advanced-search\":{\"link\":\"[[++manager_url]]?a=search\",\"icon\":\"search\",\"title\":\"[[%action_advanced_search]]\",\"description\":\"[[%action_advanced_search_desc]]\"},\"manage-users\":{\"link\":\"[[++manager_url]]?a=security\\/user\",\"icon\":\"user\",\"title\":\"[[%action_manage_users]]\",\"description\":\"[[%action_manage_users_desc]]\"}}', 'core', 'core:dashboards', 'full', ''),
(7, 'w_updates', 'w_updates_desc', 'file', '[[++manager_path]]controllers/default/dashboard/widget.updates.php', NULL, 'core', 'core:dashboards', 'one-third', 'workspaces');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_dashboard_widget_placement`
--

CREATE TABLE `modx_dashboard_widget_placement` (
  `user` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `dashboard` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `widget` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `rank` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'half'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_dashboard_widget_placement`
--

INSERT INTO `modx_dashboard_widget_placement` (`user`, `dashboard`, `widget`, `rank`, `size`) VALUES
(0, 1, 1, 2, 'one-third'),
(0, 1, 2, 3, 'one-third'),
(0, 1, 3, 5, 'one-third'),
(0, 1, 4, 6, 'two-thirds'),
(0, 1, 5, 1, 'full'),
(0, 1, 6, 0, 'full'),
(0, 1, 7, 4, 'one-third'),
(1, 1, 1, 2, 'one-third'),
(1, 1, 2, 3, 'one-third'),
(1, 1, 3, 5, 'one-third'),
(1, 1, 4, 6, 'two-thirds'),
(1, 1, 5, 1, 'full'),
(1, 1, 6, 0, 'full'),
(1, 1, 7, 4, 'one-third');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_deprecated_call`
--

CREATE TABLE `modx_deprecated_call` (
  `id` int(10) UNSIGNED NOT NULL,
  `method` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `call_count` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `caller` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `caller_file` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `caller_line` int(11) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_deprecated_method`
--

CREATE TABLE `modx_deprecated_method` (
  `id` int(10) UNSIGNED NOT NULL,
  `definition` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `since` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `recommendation` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_documentgroup_names`
--

CREATE TABLE `modx_documentgroup_names` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `private_memgroup` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `private_webgroup` tinyint(1) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_document_groups`
--

CREATE TABLE `modx_document_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `document_group` int(10) NOT NULL DEFAULT 0,
  `document` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_element_property_sets`
--

CREATE TABLE `modx_element_property_sets` (
  `element` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `element_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `property_set` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_extension_packages`
--

CREATE TABLE `modx_extension_packages` (
  `id` int(10) UNSIGNED NOT NULL,
  `namespace` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `table_prefix` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `service_class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `service_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_fc_profiles`
--

CREATE TABLE `modx_fc_profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_fc_profiles_usergroups`
--

CREATE TABLE `modx_fc_profiles_usergroups` (
  `usergroup` int(11) NOT NULL DEFAULT 0,
  `profile` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_fc_sets`
--

CREATE TABLE `modx_fc_sets` (
  `id` int(10) UNSIGNED NOT NULL,
  `profile` int(11) NOT NULL DEFAULT 0,
  `action` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `template` int(11) NOT NULL DEFAULT 0,
  `constraint` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `constraint_field` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `constraint_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_lexicon_entries`
--

CREATE TABLE `modx_lexicon_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `namespace` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `language` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `createdon` datetime DEFAULT NULL,
  `editedon` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_manager_log`
--

CREATE TABLE `modx_manager_log` (
  `id` int(10) UNSIGNED NOT NULL,
  `user` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `occurred` datetime NOT NULL DEFAULT current_timestamp(),
  `action` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `classKey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `item` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_manager_log`
--

INSERT INTO `modx_manager_log` (`id`, `user`, `occurred`, `action`, `classKey`, `item`) VALUES
(1, 1, '2024-05-20 11:59:14', 'login', 'MODX\\Revolution\\modContext', 'mgr'),
(2, 1, '2024-05-20 12:03:57', 'resource_update', 'MODX\\Revolution\\modResource', '1'),
(3, 1, '2024-05-20 12:05:10', 'template_update', 'MODX\\Revolution\\modTemplate', '1'),
(4, 1, '2024-05-20 12:05:10', 'propertyset_update_from_element', 'MODX\\Revolution\\modPropertySet', 'MODX\\Revolution\\modTemplate 1 Default'),
(5, 1, '2024-05-20 12:05:38', 'template_update', 'MODX\\Revolution\\modTemplate', '1'),
(6, 1, '2024-05-20 12:05:38', 'propertyset_update_from_element', 'MODX\\Revolution\\modPropertySet', 'MODX\\Revolution\\modTemplate 1 Default'),
(7, 1, '2024-05-20 12:53:09', 'setting_update', 'MODX\\Revolution\\modSystemSetting', 'friendly_alias_realtime'),
(8, 1, '2024-05-20 12:53:29', 'setting_update', 'MODX\\Revolution\\modSystemSetting', 'friendly_urls'),
(9, 1, '2024-05-20 12:54:19', 'content_type_save', 'MODX\\Revolution\\modContentType', '1'),
(10, 1, '2024-05-20 12:54:25', 'clear_cache', '', 'mgr'),
(11, 1, '2024-05-20 13:03:06', 'resource_create', 'MODX\\Revolution\\modDocument', '2'),
(12, 1, '2024-05-20 13:04:08', 'resource_update', 'MODX\\Revolution\\modResource', '2'),
(13, 1, '2024-05-20 13:04:32', 'template_update', 'MODX\\Revolution\\modTemplate', '1'),
(14, 1, '2024-05-20 13:04:32', 'propertyset_update_from_element', 'MODX\\Revolution\\modPropertySet', 'MODX\\Revolution\\modTemplate 1 Default'),
(15, 1, '2024-05-20 13:53:58', 'template_update', 'MODX\\Revolution\\modTemplate', '1'),
(16, 1, '2024-05-20 13:53:58', 'propertyset_update_from_element', 'MODX\\Revolution\\modPropertySet', 'MODX\\Revolution\\modTemplate 1 Default'),
(17, 1, '2024-05-20 14:03:20', 'resource_create', 'MODX\\Revolution\\modDocument', '3'),
(18, 1, '2024-05-20 14:03:37', 'resource_update', 'MODX\\Revolution\\modResource', '3'),
(19, 1, '2024-05-20 14:04:25', 'setting_update', 'MODX\\Revolution\\modSystemSetting', 'error_page'),
(20, 1, '2024-05-20 14:04:40', 'resource_update', 'MODX\\Revolution\\modResource', '3'),
(21, 1, '2024-05-20 14:09:49', 'chunk_create', 'MODX\\Revolution\\modChunk', '1'),
(22, 1, '2024-05-20 14:10:15', 'chunk_create', 'MODX\\Revolution\\modChunk', '2'),
(23, 1, '2024-05-20 14:10:40', 'chunk_create', 'MODX\\Revolution\\modChunk', '3'),
(24, 1, '2024-05-20 14:11:13', 'chunk_create', 'MODX\\Revolution\\modChunk', '4'),
(25, 1, '2024-05-20 14:11:38', 'chunk_create', 'MODX\\Revolution\\modChunk', '5'),
(26, 1, '2024-05-20 14:12:02', 'chunk_create', 'MODX\\Revolution\\modChunk', '6'),
(27, 1, '2024-05-20 14:12:38', 'template_update', 'MODX\\Revolution\\modTemplate', '1'),
(28, 1, '2024-05-20 14:12:38', 'propertyset_update_from_element', 'MODX\\Revolution\\modPropertySet', 'MODX\\Revolution\\modTemplate 1 Default'),
(29, 1, '2024-05-20 14:12:57', 'resource_update', 'MODX\\Revolution\\modResource', '1'),
(30, 1, '2024-05-20 14:13:09', 'resource_update', 'MODX\\Revolution\\modResource', '2'),
(31, 1, '2024-05-20 14:13:16', 'resource_update', 'MODX\\Revolution\\modResource', '3'),
(32, 1, '2024-05-20 14:23:55', 'template_update', 'MODX\\Revolution\\modTemplate', '1'),
(33, 1, '2024-05-20 14:23:55', 'propertyset_update_from_element', 'MODX\\Revolution\\modPropertySet', 'MODX\\Revolution\\modTemplate 1 Default'),
(34, 1, '2024-05-20 14:24:01', 'clear_cache', '', 'mgr'),
(35, 1, '2024-05-20 14:24:09', 'clear_cache', '', 'mgr'),
(36, 1, '2024-05-20 14:29:09', 'resource_update', 'MODX\\Revolution\\modResource', '1'),
(37, 1, '2024-05-20 14:29:16', 'resource_update', 'MODX\\Revolution\\modResource', '1'),
(38, 1, '2024-05-20 14:54:34', 'chunk_create', 'MODX\\Revolution\\modChunk', '7'),
(39, 1, '2024-05-20 14:58:36', 'resource_update', 'MODX\\Revolution\\modResource', '1'),
(40, 1, '2024-05-20 14:58:41', 'resource_update', 'MODX\\Revolution\\modResource', '2'),
(41, 1, '2024-05-21 14:14:37', 'resource_create', 'MODX\\Revolution\\modDocument', '4'),
(42, 1, '2024-05-21 14:15:02', 'resource_update', 'MODX\\Revolution\\modResource', '4'),
(43, 1, '2024-05-21 14:15:38', 'resource_create', 'MODX\\Revolution\\modDocument', '5'),
(44, 1, '2024-05-21 14:15:57', 'resource_update', 'MODX\\Revolution\\modResource', '5'),
(45, 1, '2024-05-21 14:17:21', 'snippet_create', 'MODX\\Revolution\\modSnippet', '1'),
(46, 1, '2024-05-21 14:18:26', 'clear_cache', '', 'mgr'),
(47, 1, '2024-05-21 14:21:53', 'clear_cache', '', 'mgr'),
(48, 1, '2024-05-21 14:35:38', 'setting_update', 'MODX\\Revolution\\modSystemSetting', 'use_alias_path'),
(49, 1, '2024-05-21 14:36:25', 'clear_cache', '', 'mgr'),
(50, 1, '2024-05-21 14:36:25', 'clear_cache', '', 'mgr'),
(51, 1, '2024-05-21 14:36:30', 'clear_cache', '', 'mgr'),
(52, 1, '2024-05-21 15:38:49', 'clear_cache', '', 'mgr'),
(53, 1, '2024-05-22 11:58:18', 'chunk_create', 'MODX\\Revolution\\modChunk', '8'),
(54, 1, '2024-05-22 16:59:11', 'chunk_create', 'MODX\\Revolution\\modChunk', '9'),
(55, 1, '2024-05-24 09:07:40', 'setting_update', 'MODX\\Revolution\\modSystemSetting', 'error_page'),
(56, 1, '2024-05-24 09:08:38', 'clear_cache', '', 'mgr'),
(57, 1, '2024-05-24 09:09:37', 'setting_update', 'MODX\\Revolution\\modSystemSetting', 'error_page'),
(58, 1, '2024-05-24 09:10:05', 'resource_create', 'MODX\\Revolution\\modDocument', '6'),
(59, 1, '2024-05-24 09:10:35', 'resource_update', 'MODX\\Revolution\\modResource', '6'),
(60, 1, '2024-05-24 09:12:32', 'chunk_create', 'MODX\\Revolution\\modChunk', '10');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_media_sources`
--

CREATE TABLE `modx_media_sources` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `class_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\Sources\\modFileMediaSource',
  `properties` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_stream` tinyint(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_media_sources`
--

INSERT INTO `modx_media_sources` (`id`, `name`, `description`, `class_key`, `properties`, `is_stream`) VALUES
(1, 'Filesystem', '', 'MODX\\Revolution\\Sources\\modFileMediaSource', 'a:0:{}', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_media_sources_contexts`
--

CREATE TABLE `modx_media_sources_contexts` (
  `source` int(11) NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'web'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_media_sources_elements`
--

CREATE TABLE `modx_media_sources_elements` (
  `source` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `object_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modTemplateVar',
  `object` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'web'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_membergroup_names`
--

CREATE TABLE `modx_membergroup_names` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `rank` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `dashboard` int(10) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_membergroup_names`
--

INSERT INTO `modx_membergroup_names` (`id`, `name`, `description`, `parent`, `rank`, `dashboard`) VALUES
(1, 'Administrator', NULL, 0, 0, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_member_groups`
--

CREATE TABLE `modx_member_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_group` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `member` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `role` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `rank` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_member_groups`
--

INSERT INTO `modx_member_groups` (`id`, `user_group`, `member`, `role`, `rank`) VALUES
(1, 1, 1, 2, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_menus`
--

CREATE TABLE `modx_menus` (
  `text` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `parent` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `action` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `menuindex` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `params` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `handler` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `namespace` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_menus`
--

INSERT INTO `modx_menus` (`text`, `parent`, `action`, `description`, `icon`, `menuindex`, `params`, `handler`, `permissions`, `namespace`) VALUES
('{$username}', 'user', 'security/profile', 'profile_desc', '', 0, '', '', 'change_profile', 'core'),
('about', 'usernav', 'help', '', '<i class=\"icon-question-circle icon icon-large\"></i>', 8, '', '', 'help', 'core'),
('acls', 'admin', 'security/permission', 'acls_desc', '', 5, '', '', 'access_permissions', 'core'),
('admin', 'usernav', '', '', '<i class=\"icon-gear icon icon-large\"></i>', 6, '', '', 'settings', 'core'),
('components', 'topnav', '', '', '<i class=\"icon-cube icon icon-large\"></i>', 2, '', '', 'components', 'core'),
('content_types', 'site', 'system/contenttype', 'content_types_desc', '', 3, '', '', 'content_types', 'core'),
('contexts', 'admin', 'context', 'contexts_desc', '', 3, '', '', 'view_context', 'core'),
('dashboards', 'admin', 'system/dashboards', 'dashboards_desc', '', 2, '', '', 'dashboards', 'core'),
('edit_menu', 'admin', 'system/action', 'edit_menu_desc', '', 4, '', '', 'actions', 'core'),
('eventlog_viewer', 'reports', 'system/event', 'eventlog_viewer_desc', '', 2, '', '', 'view_eventlog', 'core'),
('file_browser', 'media', 'media/browser', 'file_browser_desc', '', 0, '', '', 'file_manager', 'core'),
('flush_access', 'manage', '', 'flush_access_desc', '', 3, '', 'MODx.msg.confirm({\n    title: _(\'flush_access\')\n    ,text: _(\'flush_access_confirm\')\n    ,url: MODx.config.connector_url\n    ,params: {\n        action: \'security/access/flush\'\n    }\n    ,listeners: {\n        \'success\': {fn:function() { location.href = \'./\'; },scope:this},\n        \'failure\': {fn:function(response) { Ext.MessageBox.alert(\'failure\', response.responseText); },scope:this},\n    }\n});', 'access_permissions', 'core'),
('flush_sessions', 'manage', '', 'flush_sessions_desc', '', 4, '', 'MODx.msg.confirm({\n    title: _(\'flush_sessions\')\n    ,text: _(\'flush_sessions_confirm\')\n    ,url: MODx.config.connector_url\n    ,params: {\n        action: \'security/flush\'\n    }\n    ,listeners: {\n        \'success\': {fn:function() { location.href = \'./\'; },scope:this}\n    }\n});', 'flush_sessions', 'core'),
('form_customization', 'admin', 'security/forms', 'form_customization_desc', '', 1, '', '', 'customize_forms', 'core'),
('installer', 'components', 'workspaces', 'installer_desc', '', 0, '', '', 'packages', 'core'),
('language', 'user', '', 'language_desc', '', 2, '', '', 'language', 'core'),
('lexicon_management', 'admin', 'workspaces/lexicon', 'lexicon_management_desc', '', 7, '', '', 'lexicons', 'core'),
('logout', 'user', 'security/logout', 'logout_desc', '', 3, '', 'MODx.logout(); return false;', 'logout', 'core'),
('manage', 'topnav', '', '', '<i class=\"icon-sliders icon icon-large\"></i>', 3, '', '', 'menu_tools', 'core'),
('media', 'topnav', '', '', '<i class=\"icon-file-image-o icon icon-large\"></i>', 1, '', '', 'file_manager', 'core'),
('messages', 'user', 'security/message', 'messages_desc', '', 1, '', '', 'messages', 'core'),
('namespaces', 'admin', 'workspaces/namespace', 'namespaces_desc', '', 8, '', '', 'namespaces', 'core'),
('new_resource', 'site', 'resource/create', 'new_resource_desc', '', 0, '', '', 'new_document', 'core'),
('preview', 'site', '', 'preview_desc', '', 1, '', 'MODx.preview(); return false;', '', 'core'),
('propertysets', 'admin', 'element/propertyset', 'propertysets_desc', '', 6, '', '', 'property_sets', 'core'),
('refresh_site', 'manage', '', 'refresh_site_desc', '', 1, '', 'MODx.clearCache(); return false;', 'empty_cache', 'core'),
('refreshuris', 'refresh_site', '', 'refreshuris_desc', '', 0, '', 'MODx.refreshURIs(); return false;', 'empty_cache', 'core'),
('remove_locks', 'manage', '', 'remove_locks_desc', '', 2, '', 'MODx.removeLocks();return false;', 'remove_locks', 'core'),
('reports', 'manage', '', 'reports_desc', '', 5, '', '', 'menu_reports', 'core'),
('resource_groups', 'site', 'security/resourcegroup', 'resource_groups_desc', '', 2, '', '', 'access_permissions', 'core'),
('site', 'topnav', '', '', '<i class=\"icon-file-text-o icon icon-large\"></i>', 0, '', '', 'menu_site', 'core'),
('site_schedule', 'reports', 'resource/site_schedule', 'site_schedule_desc', '', 0, '', '', 'view_document', 'core'),
('sources', 'media', 'source', 'sources_desc', '', 1, '', '', 'sources', 'core'),
('system_settings', 'admin', 'system/settings', 'system_settings_desc', '', 0, '', '', 'settings', 'core'),
('topnav', '', '', 'topnav_desc', '', 0, '', '', '', 'core'),
('user', 'usernav', '', '', '<span id=\"user-avatar\">{$userImage}</span> <span id=\"user-username\">{$username}</span>', 5, '', '', 'menu_user', 'core'),
('usernav', '', '', 'usernav_desc', '', 0, '', '', '', 'core'),
('users', 'manage', 'security/user', 'user_management_desc', '', 0, '', '', 'view_user', 'core'),
('view_logging', 'reports', 'system/logs', 'view_logging_desc', '', 1, '', '', 'mgr_log_view', 'core'),
('view_sysinfo', 'reports', 'system/info', 'view_sysinfo_desc', '', 3, '', '', 'view_sysinfo', 'core');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_namespaces`
--

CREATE TABLE `modx_namespaces` (
  `name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `assets_path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_namespaces`
--

INSERT INTO `modx_namespaces` (`name`, `path`, `assets_path`) VALUES
('core', '{core_path}', '{assets_path}');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_property_set`
--

CREATE TABLE `modx_property_set` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `category` int(10) NOT NULL DEFAULT 0,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_register_messages`
--

CREATE TABLE `modx_register_messages` (
  `topic` int(10) UNSIGNED NOT NULL,
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `valid` datetime NOT NULL,
  `accessed` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `accesses` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `expires` int(20) NOT NULL DEFAULT 0,
  `payload` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `kill` tinyint(1) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_register_queues`
--

CREATE TABLE `modx_register_queues` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_register_queues`
--

INSERT INTO `modx_register_queues` (`id`, `name`, `options`) VALUES
(1, 'locks', 'a:1:{s:9:\"directory\";s:5:\"locks\";}');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_register_topics`
--

CREATE TABLE `modx_register_topics` (
  `id` int(10) UNSIGNED NOT NULL,
  `queue` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `options` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_register_topics`
--

INSERT INTO `modx_register_topics` (`id`, `queue`, `name`, `created`, `updated`, `options`) VALUES
(1, 1, '/resource/', '2024-05-20 12:03:23', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_session`
--

CREATE TABLE `modx_session` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `access` int(20) UNSIGNED NOT NULL,
  `data` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_session`
--

INSERT INTO `modx_session` (`id`, `access`, `data`) VALUES
('7aubi77jlu9gqovnlfqcdq4linpl5ber', 1716907101, 'modx.user.contextTokens|a:1:{s:3:\"mgr\";i:1;}manager_language|s:2:\"ru\";modx.user.0.resourceGroups|a:1:{s:3:\"mgr\";a:0:{}}modx.user.0.attributes|a:1:{s:3:\"mgr\";a:5:{s:32:\"MODX\\Revolution\\modAccessContext\";a:1:{s:3:\"web\";a:1:{i:0;a:3:{s:9:\"principal\";i:0;s:9:\"authority\";i:0;s:6:\"policy\";a:1:{s:4:\"load\";b:1;}}}}s:38:\"MODX\\Revolution\\modAccessResourceGroup\";a:0:{}s:33:\"MODX\\Revolution\\modAccessCategory\";a:0:{}s:44:\"MODX\\Revolution\\Sources\\modAccessMediaSource\";a:0:{}s:34:\"MODX\\Revolution\\modAccessNamespace\";a:0:{}}}modx.mgr.user.token|s:52:\"modx664b109206e4e0.99821209_1664b10e22ec784.57996722\";modx.mgr.session.cookie.lifetime|i:0;modx.mgr.user.config|a:0:{}newResourceTokens|a:40:{i:0;s:23:\"664b11dbdb14b1.47290153\";i:1;s:23:\"664b158b689109.93885185\";i:2;s:23:\"664b1dd4a43ea4.69390437\";i:3;s:23:\"664b1fdb0b6883.22387204\";i:4;s:23:\"664b203466b358.44070118\";i:5;s:23:\"664b2df93c32e3.97709441\";i:6;s:23:\"664b2e438bb380.25271601\";i:7;s:23:\"664b303b3f03d9.97926389\";i:8;s:23:\"664b30478f2f75.48105451\";i:9;s:23:\"664b32a3e69169.98848730\";i:10;s:23:\"664b32a8d80175.62088831\";i:11;s:23:\"664b32e1e083d7.83025138\";i:12;s:23:\"664b3aee7b3928.64246194\";i:13;s:23:\"664c33c8860b64.54731923\";i:14;s:23:\"664c81fada6b23.09967469\";i:15;s:23:\"664c821dc744c6.51127086\";i:16;s:23:\"664c825ac8d952.58008230\";i:17;s:23:\"664c834e96fac6.85460396\";i:18;s:23:\"664c86a2cfc628.21603534\";i:19;s:23:\"664c87360c3d69.02638527\";i:20;s:23:\"664c95d3c43130.53209153\";i:21;s:23:\"664d9e79956c87.10058727\";i:22;s:23:\"66502e94079b99.54447019\";i:23;s:23:\"66502edb338e63.74110597\";i:24;s:23:\"66502f3e44b070.96567667\";i:25;s:23:\"66502f5e92a811.84893816\";i:26;s:23:\"66502f62240fb4.68701311\";i:27;s:23:\"66502f65cf7475.74789559\";i:28;s:23:\"66503033e23845.40860237\";i:29;s:23:\"665030baceee77.31433221\";i:30;s:23:\"665030dc37ac07.90112219\";i:31;s:23:\"665030ffef0b32.49201877\";i:32;s:23:\"665414b7338c03.72609037\";i:33;s:23:\"66542585bd2ec0.76156076\";i:34;s:23:\"66545ff02b9506.55352132\";i:35;s:23:\"66546bc2cdf968.60295076\";i:36;s:23:\"66557ac3260b39.00951314\";i:37;s:23:\"665586340b0ae3.20558005\";i:38;s:23:\"6655e5d2725036.88264447\";i:39;s:23:\"6655ec5dc7a355.99498612\";}');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_content`
--

CREATE TABLE `modx_site_content` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'document',
  `pagetitle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `longtitle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `link_attributes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `published` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `pub_date` int(20) NOT NULL DEFAULT 0,
  `unpub_date` int(20) NOT NULL DEFAULT 0,
  `parent` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `isfolder` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `introtext` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `richtext` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `template` int(10) NOT NULL DEFAULT 0,
  `menuindex` int(10) NOT NULL DEFAULT 0,
  `searchable` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `cacheable` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `createdby` int(10) NOT NULL DEFAULT 0,
  `createdon` int(20) NOT NULL DEFAULT 0,
  `editedby` int(10) NOT NULL DEFAULT 0,
  `editedon` int(20) NOT NULL DEFAULT 0,
  `deleted` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `deletedon` int(20) NOT NULL DEFAULT 0,
  `deletedby` int(10) NOT NULL DEFAULT 0,
  `publishedon` int(20) NOT NULL DEFAULT 0,
  `publishedby` int(10) NOT NULL DEFAULT 0,
  `menutitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `donthit` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `privateweb` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `privatemgr` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `content_dispo` tinyint(1) NOT NULL DEFAULT 0,
  `hidemenu` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `class_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modDocument',
  `context_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'web',
  `content_type` int(11) UNSIGNED NOT NULL DEFAULT 1,
  `uri` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uri_override` tinyint(1) NOT NULL DEFAULT 0,
  `hide_children_in_tree` tinyint(1) NOT NULL DEFAULT 0,
  `show_in_tree` tinyint(1) NOT NULL DEFAULT 1,
  `properties` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alias_visible` tinyint(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_site_content`
--

INSERT INTO `modx_site_content` (`id`, `type`, `pagetitle`, `longtitle`, `description`, `alias`, `link_attributes`, `published`, `pub_date`, `unpub_date`, `parent`, `isfolder`, `introtext`, `content`, `richtext`, `template`, `menuindex`, `searchable`, `cacheable`, `createdby`, `createdon`, `editedby`, `editedon`, `deleted`, `deletedon`, `deletedby`, `publishedon`, `publishedby`, `menutitle`, `donthit`, `privateweb`, `privatemgr`, `content_dispo`, `hidemenu`, `class_key`, `context_key`, `content_type`, `uri`, `uri_override`, `hide_children_in_tree`, `show_in_tree`, `properties`, `alias_visible`) VALUES
(1, 'document', 'Металлорукава и РВД', '', '', 'index', '', 1, 0, 0, 0, 0, '', '[[!$main_page]]', 1, 1, 0, 1, 1, 1, 1716195487, 1, 1716206316, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 'MODX\\Revolution\\modDocument', 'web', 1, 'index', 0, 0, 1, NULL, 1),
(2, 'document', 'Продукция', '', '', 'products', '', 1, 0, 0, 0, 0, '', '[[!$products_page]]', 1, 1, 1, 1, 1, 1, 1716199386, 1, 1716206321, 0, 0, 0, 1716199440, 1, '', 0, 0, 0, 0, 0, 'MODX\\Revolution\\modDocument', 'web', 1, 'products', 0, 0, 1, NULL, 1),
(3, 'document', '404', '', '', '404', '', 1, 0, 0, 0, 0, '', '[[$404]]', 1, 1, 2, 1, 1, 1, 1716203000, 1, 1716203596, 0, 0, 0, 1716202980, 1, '', 0, 0, 0, 0, 0, 'MODX\\Revolution\\modDocument', 'web', 1, '404', 0, 0, 1, NULL, 1),
(4, 'document', 'api', '', '', 'api', '', 1, 0, 0, 0, 1, '', '', 1, 0, 3, 1, 1, 1, 1716290077, 1, 1716290102, 0, 0, 0, 1716290102, 1, '', 0, 0, 0, 0, 1, 'MODX\\Revolution\\modDocument', 'web', 1, 'api/', 0, 0, 1, NULL, 1),
(5, 'document', 'commercial-offer', '', '', 'commercial-offer', '', 1, 0, 0, 4, 0, '', '[[!send_mail]]', 1, 0, 0, 1, 1, 1, 1716290138, 1, 1716290157, 0, 0, 0, 1716290157, 1, '', 0, 0, 0, 0, 1, 'MODX\\Revolution\\modDocument', 'web', 1, 'api/commercial-offer', 0, 0, 1, NULL, 1),
(6, 'document', 'Контакты', '', '', 'contacts', '', 1, 0, 0, 0, 0, '', '[[$contacts_page]]', 1, 1, 4, 1, 1, 1, 1716531005, 1, 1716531035, 0, 0, 0, 1716531035, 1, '', 0, 0, 0, 0, 0, 'MODX\\Revolution\\modDocument', 'web', 1, 'contacts', 0, 0, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_htmlsnippets`
--

CREATE TABLE `modx_site_htmlsnippets` (
  `id` int(10) UNSIGNED NOT NULL,
  `source` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `property_preprocess` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Chunk',
  `editor_type` int(11) NOT NULL DEFAULT 0,
  `category` int(11) NOT NULL DEFAULT 0,
  `cache_type` tinyint(1) NOT NULL DEFAULT 0,
  `snippet` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `static` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `static_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_site_htmlsnippets`
--

INSERT INTO `modx_site_htmlsnippets` (`id`, `source`, `property_preprocess`, `name`, `description`, `editor_type`, `category`, `cache_type`, `snippet`, `locked`, `properties`, `static`, `static_file`) VALUES
(1, 1, 0, 'head', '', 0, 0, 0, '<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <!--        <link rel=\"icon\" href=\"/assets/resources/img/favicon.svg\">-->\r\n    <!--        <link rel=\"stylesheet\" href=\"/assets/resources/css/main.css\">-->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\r\n    <script src=\"/assets/resources/js/main.js\"></script>\r\n    <script src=\"/assets/resources/js/test.js\"></script>\r\n\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap\" rel=\"stylesheet\">\r\n\r\n\r\n    <link rel=\"stylesheet\" href=\"/assets/resources/css/main.css\">\r\n\r\n    <title>Металлорукава</title>\r\n</head>', 0, 'a:0:{}', 1, 'assets/base/chunks/layout/head.html'),
(2, 1, 0, 'header', '', 0, 0, 0, '<header class=\"container\">\r\n    <div class=\"header\">\r\n        <a href=\"/\" class=\"header-logo logo\">\r\n            <img src=\"https://fluid-line.ru/assets/page/logo/logo-new.svg\" alt=\"logo\">\r\n        </a>\r\n        <div class=\"header-menu\">\r\n            <!--                    <a href=\"#\">Металлорукава</a>-->\r\n            <a href=\"/products\">Металлорукава и РВД</a>\r\n            <a href=\"/contacts\">Контакты</a>\r\n        </div>\r\n        <div class=\"header-contacts\">\r\n            <a href=\"\">mail@fld.ru</a>\r\n            <a>+7 495 984 41 00</a>\r\n        </div>\r\n        <div class=\"header-btn\">\r\n            <div class=\"btn\" onclick=\"showForm(\'/api/commercial-offer\', \'post\', \'Отправить спецификацию\', \'letter\')\">Отправить спецификацию</div>\r\n        </div>\r\n    </div>\r\n</header>', 0, 'a:0:{}', 1, 'assets/base/chunks/layout/header.html'),
(3, 1, 0, 'footer', '', 0, 0, 0, '<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <a href=\"/\" class=\"footer-logo logo\">\r\n                <img src=\"/assets/resources/img/logo-white.svg\" alt=\"logo\">\r\n            </a>\r\n            <div class=\"footer-links\">\r\n                <a href=\"/products\">Металлорукава и РВД</a>\r\n<!--                <a href=\"#\">Рукава Высокого Давления</a>-->\r\n                <a href=\"/contacts\">Контакты</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer-contacts\">\r\n            <div>\r\n                <a href=\"\">mail@fld.ru</a>\r\n                <a href=\"\">+7 495 984 41 00</a>\r\n            </div>\r\n            <div>\r\n                <div>г. Москва, ул. Большая Cеменовская,  д.49</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>', 0, 'a:0:{}', 1, 'assets/base/chunks/layout/footer.html'),
(4, 1, 0, 'main_page', '', 0, 0, 0, '<div class=\"main-banner\">\r\n    <div>\r\n        <div>Металлорукава</div>\r\n        <div>Рукава высокого давления</div>\r\n    </div>\r\n    <img alt=\"banner\" src=\"/assets/resources/img/main-banner.png\">\r\n</div>\r\n<div class=\"container main-about\">\r\n    <div class=\"main-about-head\">Изготовление металлорукавов на заказ по вашей спецификации</div>\r\n    <div class=\"main-about-body\">\r\n        <div>\r\n            <div class=\"main-about-body-text\">Наша организация специализируется на изготовлении металлорукавов и рукавов высокого давления из нержавеющей стали по полному циклу производства.\r\n                Наличие собственной производственной базы, конструкторского отдела и квалифицированного персонала позволяет решать сложные и нестандартные задачи.</div>\r\n            <div class=\"btn\" onclick=\"showForm(\'/api/commercial-offer\', \'post\', \'Отправить спецификацию\', \'letter\')\">\r\n                Отправить спецификацию\r\n            </div>\r\n        </div>\r\n        <div class=\"main-about-body-img\">\r\n            <img src=\"/assets/resources/img/about-prod.png\" alt=\"img\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main-cards container\">\r\n    <div class=\"main-cards-item\">\r\n        <div>Металлорукава</div>\r\n        <div>\r\n            Металлорукав полностью состоит из нержавеющей стали: внутренней сильфонной трубки, оплётки и фитингов.\r\n            <br>\r\n            Материал сильфонной трубки 321 или 316L нержавеющая сталь, материал оплётки 304L или 316L нержавеющая сталь.\r\n            <br>\r\n            Благодаря этому металлорукава обладают хорошими рабочими параметрами: Рраб до 220бар, Tраб от -200°С до +420°С, длительным сроком службы, хорошим внешним видом, высокой коррозионной стойкостью, могут быть изготовлены с различными фитингами и заданной длины. Обладают хорошей гибкостью.\r\n        </div>\r\n        <div>\r\n            <a class=\"btn\" href=\"/products\">Подробнее</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-cards-item\">\r\n        <div>РВД</div>\r\n        <div>\r\n            Рукав высокого давления (РВД) состоит из внутренней полимерной трубки, армирующей оплётки и защитного покрытия.\r\n            <br>\r\n            Рабочие параметры:\r\n            <br>\r\n            Рраб до 475бар, Tраб от -70 до +260°С\r\n            <br>\r\n            Материал: PTFE, ETFE, Полиамид, нержавеющая сталь\r\n            <br>\r\n            ДУ: 6 - 12 мм, возможно изготовление ду 25 мм, 32 мм, 38 мм, 50 мм, 80 мм\r\n        </div>\r\n        <div>\r\n            <a class=\"btn\" href=\"/products\">Подробнее</a>\r\n        </div>\r\n    </div>\r\n</div>', 0, 'a:0:{}', 1, 'assets/base/chunks/pages/main.html'),
(5, 1, 0, 'products_page', '', 0, 0, 0, '[[!$prod_filter]]\r\n<div class=\"prod-images container\">\r\n        <div class=\"topw\">\r\n            <div class=\"platform\">\r\n                <div class=\"cutimg\">\r\n                    <img src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/F_left_cut.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"bigimg\">\r\n                    <img width=\"300\" src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/big/F_left_cut.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"cv_cns c\">\r\n                <div class=\"cccc\">\r\n                    <img class=\"zk\" src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/F_left.png\" alt=\"\">\r\n                    <img class=\"imgbc\" src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/rkv_main.png\" alt=\"\">\r\n                    <img class=\"zk\" src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/A_right.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"platform\">\r\n                <div class=\"cutimg\">\r\n                    <img src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/A_right_cut.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"bigimg\">\r\n                    <img width=\"300\" src=\"https://fluid-line.ru/assets/snippets/product/rkv/img/big/A_right_cut.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    <div class=\"topw2\">\r\n        <div>\r\n            <span class=\"big_txt\">F</span>\r\n            <span class=\"large_text\">несъёмный штуцер с внутренней резьбой</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"big_txt\">A</span>\r\n            <span class=\"large_text\">съёмный штуцер с наружной резьбой</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n[[!$prod_table]]\r\n', 0, 'a:0:{}', 1, 'assets/base/chunks/pages/products.html'),
(6, 1, 0, '404', '', 0, 0, 0, '<div class=\"container\">error</div>', 0, 'a:0:{}', 1, 'assets/base/chunks/pages/404.html'),
(7, 1, 0, 'carousel', '', 0, 0, 0, '<div class=\"carousel-head container\">Наши клиенты</div>\r\n<div class=\"carousel container\" id=\"carousel\">\r\n    <div class=\"inner\">\r\n        <div class=\"carousel-inner\">\r\n            <div class=\"images animated\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/classicFiltersActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#cf\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hokeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hk\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/fireChildActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#fc\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/gceDruvaActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ge\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/airflowActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#af\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/acdActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ac\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/a-flowActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#fl\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hipActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hp\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/handytubeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hh\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/regoActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#rg\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/scActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sc\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/sealActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#cs\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/seetruActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sr\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/sgtActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sg\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/vbcActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#vb\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/goActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#gr\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/worthingtonActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#wt\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/mega-inoxActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#mi\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hanbeeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hb\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/elmessActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#em\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/habiaActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ha\')\">\r\n\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/classicFiltersActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#cf\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hokeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hk\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/fireChildActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#fc\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/gceDruvaActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ge\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/airflowActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#af\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/acdActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ac\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/a-flowActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#fl\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hipActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hp\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/handytubeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hh\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/regoActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#rg\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/scActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sc\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/sealActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#cs\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/seetruActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sr\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/sgtActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sg\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/vbcActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#vb\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/goActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#gr\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/worthingtonActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#wt\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/mega-inoxActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#mi\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hanbeeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hb\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/elmessActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#em\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/habiaActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ha\')\">\r\n\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/classicFiltersActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#cf\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hokeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hk\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/fireChildActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#fc\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/gceDruvaActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ge\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/airflowActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#af\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/acdActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ac\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/a-flowActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#fl\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hipActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hp\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/handytubeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hh\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/regoActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#rg\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/scActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sc\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/sealActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#cs\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/seetruActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sr\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/sgtActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#sg\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/vbcActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#vb\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/goActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#gr\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/worthingtonActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#wt\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/mega-inoxActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#mi\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/hanbeeActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#hb\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/elmessActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#em\')\">\r\n                <img src=\"https://mvif.ru/assets/templates/novinka/images/logos/habiaActive.png\" alt=\"\" class=\"carousel-item\" onclick=\"index.scrollToDealer(\'nashi-postavshhiki\', \'#ha\')\">\r\n            </div>\r\n        </div>\r\n        <div class=\"control left carousel-control\"></div>\r\n        <div class=\"control right carousel-control\"></div>\r\n    </div>\r\n<!--    <div class=\"carousel-head\">Наши клиенты</div>-->\r\n<!--    <div class=\"carousel-client\">-->\r\n<!--        <div>стрелка</div>-->\r\n<!--        <div> карусель </div>-->\r\n<!--        <div>стрелка</div>-->\r\n<!--    </div>-->\r\n</div>', 0, 'a:0:{}', 1, 'assets/base/chunks/elem/carousel.html'),
(8, 1, 0, 'prod_filter', '', 0, 0, 0, '<form id=\"rbfrm\" class=\"prod-filter container\">\r\n    <div class=\"prod-filter-head\">Металлорукава</div>\r\n<!--    <div class=\"prod-filter-switcher\">-->\r\n<!--        <div></div>-->\r\n<!--        <div>-->\r\n<!--            <div>-->\r\n<!--                <input class=\"lpxs\" name=\"mrk\" id=\"vvvv1\" type=\"checkbox\" value=\"on\">-->\r\n<!--                <label class=\"mr_min\" for=\"vvvv1\" data-h=\"1\">Металлорукав</label>-->\r\n<!--            </div>-->\r\n<!--            <div>-->\r\n<!--                <input class=\"lpxs\" name=\"rvd\" id=\"vvvv2\" type=\"checkbox\" data-h=\"2\" value=\"on\">-->\r\n<!--                <label class=\"mr_min\" for=\"vvvv2\">Рукав высокого давления</label>-->\r\n<!--            </div>-->\r\n<!--        </div>-->\r\n<!--    </div>-->\r\n\r\n\r\n\r\n    <div class=\"prod-filter-wrap\">\r\n        <div class=\"prod-filter-wrap-item\">\r\n            <div>\r\n                <div class=\"prod-filter-wrap-item-head\">Тип первой законцовки</div>\r\n                <select class=\"select hide\" name=\"zakontsovka-1\">\r\n                    <option disabled>Выбрать</option>\r\n<!--                    <option value=\"I\" data-val=\"I - Ниппель под трубный фитинг\" data-ti=\"1\" data-oren=\"l\" data-type=\"I\" data-img=\"/assets/snippets/product/rkv/img/tips/I.png\">I - Ниппель под трубный фитинг</option>-->\r\n\r\n                </select>\r\n            </div>\r\n            <div class=\"prod-filter-radio\">\r\n                <div>Размер первой законцовки</div>\r\n                <div class=\"panel\" id=\"size1\">\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-10ek\" type=\"radio\" value=\"\" checked>\r\n                        <label for=\"sz1-10ek\">6 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-20ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-20ek\">8 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-30ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-30ek\">10 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-40ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-40ek\">12 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-50ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-50ek\">14 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-60ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-60ek\">16 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-70ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-70ek\">18 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-80ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-80ek\">1\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-90ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-90ek\">20 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-100ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-100ek\">22 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-110ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-110ek\">25 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-120ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-120ek\">1/4\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-130ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-130ek\">3/8\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-140ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-140ek\">1/2\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size1\" id=\"sz1-150ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz1-150ek\">3/4\'\' мм</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-filter-radio\">\r\n                <div>Газовая среда</div>\r\n                <div>\r\n                    <div>\r\n                        <input type=\"radio\" name=\"oxygen\" value=\"on\" id=\"o21\" class=\"oxygen\" checked>\r\n                        <label class=\"mrtp w80\" for=\"o21\">Кислород</label>\r\n<!--                        <input name=\"gas-sreda\" type=\"radio\" value=\"\" id=\"gas-sreda-1\" checked>-->\r\n<!--                        <label for=\"gas-sreda-1\">кислород</label>-->\r\n                    </div>\r\n                    <div>\r\n                        <input type=\"radio\" name=\"oxygen\" value=\"off\" id=\"o21_2\" class=\"oxygen\">\r\n                        <label class=\"mrtp w80\" for=\"o21_2\">Не кислород</label>\r\n<!--                        <input name=\"gas-sreda\" type=\"radio\" value=\"\" id=\"gas-sreda-2\">-->\r\n<!--                        <label for=\"gas-sreda-2\">не кислород</label>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"prod-filter-wrap-item\">\r\n            <div>\r\n                <div class=\"prod-filter-wrap-item-head\">\r\n                    <div>Тип второй законцовки</div>\r\n                    <div class=\"filter-analog\">\r\n                        <label class=\"prod-filter-checkbox\">\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <div></div>\r\n                            <span>Аналогично первой</span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <select class=\"select hide\" name=\"zakontsovka-2\">\r\n                    <option disabled>Выбрать</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"prod-filter-radio\">\r\n                <div>Размер первой законцовки</div>\r\n                <div class=\"panel\" id=\"size2\">\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-10ek\" type=\"radio\" value=\"\" checked>\r\n                        <label for=\"sz2-10ek\">6 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-20ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-20ek\">8 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-30ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-30ek\">10 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-40ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-40ek\">12 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-50ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-50ek\">14 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-60ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-60ek\">16 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-70ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-70ek\">18 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-80ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-80ek\">1\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-90ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-90ek\">20 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-100ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-100ek\">22 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-110ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-110ek\">25 мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-120ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-120ek\">1/4\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-130ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-130ek\">3/8\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-140ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-140ek\">1/2\'\' мм</label>\r\n                    </div>\r\n                    <div>\r\n                        <input class=\"csz p3\" data-key=\"0\" data-numset=\"1\" name=\"size2\" id=\"sz2-150ek\" type=\"radio\" value=\"\">\r\n                        <label for=\"sz2-150ek\">3/4\'\' мм</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-filter-length\">\r\n                <div>Длина (L)</div>\r\n                <div>\r\n                    <label>\r\n                        <input name=\"length\" id=\"size\" type=\"number\" class=\"inptop\" min=\"50\" max=\"100000\" step=\"any\">\r\n                        <span>мм</span>\r\n                    </label>\r\n                    <label class=\"prod-filter-checkbox\">\r\n                        <input type=\"checkbox\" id=\"tros\" class=\"chgtip ilp\" data-for=\"tros1\" name=\"tros\">\r\n                        <div></div>\r\n                        <label for=\"tros\" class=\"tipselect\">Трос</label>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>', 0, 'a:0:{}', 1, 'assets/base/chunks/elem/prod_filter.html'),
(9, 1, 0, 'prod_table', '', 0, 0, 0, '<div class=\"prod-table container\">\r\n\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr class=\"table-head\">\r\n                <th>Кодировка</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class=\"product-list head\">\r\n            <tr>\r\n                <td>PH-E-3M-300-GR-I/6M-I/4T-1000</td>\r\n            </tr>\r\n            <tr>\r\n                <td>PH-F-6M-300-BL-I/8M-I/6МBR-1000</td>\r\n            </tr>\r\n            <tr>\r\n                <td>PH-E-3M-300-GR-I/6M-I/4T-1000</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div>\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr class=\"table-head\">\r\n                <th>Количество оплеток</th>\r\n                <th>Длина L</th>\r\n                <th>Давление</th>\r\n                <th>ДУ</th>\r\n                <th colspan=\"2\">\r\n                    <div>Подсоединение</div>\r\n                    <div class=\"table-colspan\">\r\n                        <div>1</div>\r\n                        <div>2</div>\r\n                    </div>\r\n                </th>\r\n                <th>Спираль защитная</th>\r\n                <th>Совместимость с кислородом</th>\r\n                <th>Трос</th>\r\n                <th>Тепло-\r\n                    изоляция</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class=\"product-list body\">\r\n                <tr>\r\n                    <td>ETFE одинарная</td>\r\n                    <td>1000 мм</td>\r\n                    <td>300 бар</td>\r\n                    <td>3мм</td>\r\n                    <td>(1/6М) 6мм</td>\r\n                    <td>(1/6М) 6мм</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>\r\n                        <span class=\"prod-table-btn\">Отправить запрос</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ETFE одинарная</td>\r\n                    <td>1000 мм</td>\r\n                    <td>300 бар</td>\r\n                    <td>3мм</td>\r\n                    <td>(1/6М) 6мм</td>\r\n                    <td>(1/6М) 6мм</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>\r\n                        <span class=\"prod-table-btn\">Отправить запрос</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ETFE одинарная</td>\r\n                    <td>1000 мм</td>\r\n                    <td>300 бар</td>\r\n                    <td>3мм</td>\r\n                    <td>(1/6М) 6мм</td>\r\n                    <td>(1/6М) 6мм</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>нет</td>\r\n                    <td>\r\n                        <span class=\"prod-table-btn\">Отправить запрос</span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n\r\n\r\n</div>', 0, 'a:0:{}', 1, 'assets/base/chunks/elem/prod_table.html'),
(10, 1, 0, 'contacts_page', '', 0, 0, 0, '<div class=\"container\">contacts</div>', 0, 'a:0:{}', 1, 'assets/base/chunks/pages/contacts.html');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_plugins`
--

CREATE TABLE `modx_site_plugins` (
  `id` int(10) UNSIGNED NOT NULL,
  `source` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `property_preprocess` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editor_type` int(11) NOT NULL DEFAULT 0,
  `category` int(11) NOT NULL DEFAULT 0,
  `cache_type` tinyint(1) NOT NULL DEFAULT 0,
  `plugincode` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `locked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disabled` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `moduleguid` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `static` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `static_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_plugin_events`
--

CREATE TABLE `modx_site_plugin_events` (
  `pluginid` int(10) NOT NULL DEFAULT 0,
  `event` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `priority` int(10) NOT NULL DEFAULT 0,
  `propertyset` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_snippets`
--

CREATE TABLE `modx_site_snippets` (
  `id` int(10) UNSIGNED NOT NULL,
  `source` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `property_preprocess` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editor_type` int(11) NOT NULL DEFAULT 0,
  `category` int(11) NOT NULL DEFAULT 0,
  `cache_type` tinyint(1) NOT NULL DEFAULT 0,
  `snippet` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `moduleguid` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `static` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `static_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_site_snippets`
--

INSERT INTO `modx_site_snippets` (`id`, `source`, `property_preprocess`, `name`, `description`, `editor_type`, `category`, `cache_type`, `snippet`, `locked`, `properties`, `moduleguid`, `static`, `static_file`) VALUES
(1, 1, 0, 'send_mail', '', 0, 0, 0, 'require_once \'vendor/autoload.php\';\r\n\r\n$dotenv = Dotenv\\Dotenv::createImmutable(\"./\");\r\n$dotenv->load();\r\n\r\nApp\\Offer\\Mailer::sendMail();', 0, 'a:0:{}', '', 1, 'assets/base/snippets/send_mail.php');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_templates`
--

CREATE TABLE `modx_site_templates` (
  `id` int(10) UNSIGNED NOT NULL,
  `source` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `property_preprocess` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `templatename` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editor_type` int(11) NOT NULL DEFAULT 0,
  `category` int(11) NOT NULL DEFAULT 0,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `template_type` int(11) NOT NULL DEFAULT 0,
  `content` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `locked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `static` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `static_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `preview_file` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_site_templates`
--

INSERT INTO `modx_site_templates` (`id`, `source`, `property_preprocess`, `templatename`, `description`, `editor_type`, `category`, `icon`, `template_type`, `content`, `locked`, `properties`, `static`, `static_file`, `preview_file`) VALUES
(1, 1, 0, 'футер и хедер', '', 0, 0, '', 0, '<!DOCTYPE html>\n<html lang=\"ru\">\n    [[$head]]\n    <body>\n\n        [[!$header]]\n\n<!--        [[*id:ne=`1`:then=`[[$aside]]`]]-->\n\n        <main>\n            [[*content]]\n        </main>\n\n        [[!$carousel]]\n        [[!$footer]]\n\n        [[$scripts]]\n    </body>\n</html>', 0, 'a:0:{}', 1, 'assets/base/templates/main.tpl', '');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_tmplvars`
--

CREATE TABLE `modx_site_tmplvars` (
  `id` int(10) UNSIGNED NOT NULL,
  `source` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `property_preprocess` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `caption` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editor_type` int(11) NOT NULL DEFAULT 0,
  `category` int(11) NOT NULL DEFAULT 0,
  `locked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `elements` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rank` int(11) NOT NULL DEFAULT 0,
  `display` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `default_text` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `input_properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `output_properties` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `static` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `static_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_tmplvar_access`
--

CREATE TABLE `modx_site_tmplvar_access` (
  `id` int(10) UNSIGNED NOT NULL,
  `tmplvarid` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `documentgroup` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_tmplvar_contentvalues`
--

CREATE TABLE `modx_site_tmplvar_contentvalues` (
  `id` int(10) UNSIGNED NOT NULL,
  `tmplvarid` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `contentid` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_site_tmplvar_templates`
--

CREATE TABLE `modx_site_tmplvar_templates` (
  `tmplvarid` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `templateid` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_system_eventnames`
--

CREATE TABLE `modx_system_eventnames` (
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` tinyint(4) UNSIGNED NOT NULL DEFAULT 0,
  `groupname` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_system_eventnames`
--

INSERT INTO `modx_system_eventnames` (`name`, `service`, `groupname`) VALUES
('OnBeforeCacheUpdate', 4, 'System'),
('OnBeforeChunkFormDelete', 1, 'Chunks'),
('OnBeforeChunkFormSave', 1, 'Chunks'),
('OnBeforeDocFormDelete', 1, 'Resources'),
('OnBeforeDocFormSave', 1, 'Resources'),
('OnBeforeEmptyTrash', 1, 'Resources'),
('OnBeforeManagerLogin', 2, 'Security'),
('OnBeforeManagerLogout', 2, 'Security'),
('OnBeforeManagerPageInit', 2, 'System'),
('OnBeforePluginFormDelete', 1, 'Plugins'),
('OnBeforePluginFormSave', 1, 'Plugins'),
('OnBeforeRegisterClientScripts', 5, 'System'),
('OnBeforeSaveWebPageCache', 4, 'System'),
('OnBeforeSnipFormDelete', 1, 'Snippets'),
('OnBeforeSnipFormSave', 1, 'Snippets'),
('OnBeforeTempFormDelete', 1, 'Templates'),
('OnBeforeTempFormSave', 1, 'Templates'),
('OnBeforeTVFormDelete', 1, 'Template Variables'),
('OnBeforeTVFormSave', 1, 'Template Variables'),
('OnBeforeUserActivate', 1, 'Users'),
('OnBeforeUserDeactivate', 1, 'Users'),
('OnBeforeUserDuplicate', 1, 'Users'),
('OnBeforeUserFormDelete', 1, 'Users'),
('OnBeforeUserFormSave', 1, 'Users'),
('OnBeforeUserGroupFormRemove', 1, 'User Groups'),
('OnBeforeUserGroupFormSave', 1, 'User Groups'),
('OnBeforeWebLogin', 3, 'Security'),
('OnBeforeWebLogout', 3, 'Security'),
('OnCacheUpdate', 4, 'System'),
('OnCategoryBeforeRemove', 1, 'Categories'),
('OnCategoryBeforeSave', 1, 'Categories'),
('OnCategoryRemove', 1, 'Categories'),
('OnCategorySave', 1, 'Categories'),
('OnChunkBeforeRemove', 1, 'Chunks'),
('OnChunkBeforeSave', 1, 'Chunks'),
('OnChunkFormDelete', 1, 'Chunks'),
('OnChunkFormPrerender', 1, 'Chunks'),
('OnChunkFormRender', 1, 'Chunks'),
('OnChunkFormSave', 1, 'Chunks'),
('OnChunkRemove', 1, 'Chunks'),
('OnChunkSave', 1, 'Chunks'),
('OnContextBeforeRemove', 1, 'Contexts'),
('OnContextBeforeSave', 1, 'Contexts'),
('OnContextFormPrerender', 2, 'Contexts'),
('OnContextFormRender', 2, 'Contexts'),
('OnContextRemove', 1, 'Contexts'),
('OnContextSave', 1, 'Contexts'),
('OnDocFormDelete', 1, 'Resources'),
('OnDocFormPrerender', 1, 'Resources'),
('OnDocFormRender', 1, 'Resources'),
('OnDocFormSave', 1, 'Resources'),
('OnDocPublished', 5, 'Resources'),
('OnDocUnPublished', 5, 'Resources'),
('OnElementNotFound', 1, 'System'),
('OnEmptyTrash', 1, 'Resources'),
('OnFileCreateFormPrerender', 1, 'System'),
('OnFileEditFormPrerender', 1, 'System'),
('OnFileManagerBeforeUpload', 1, 'System'),
('OnFileManagerDirCreate', 1, 'System'),
('OnFileManagerDirRemove', 1, 'System'),
('OnFileManagerDirRename', 1, 'System'),
('OnFileManagerFileCreate', 1, 'System'),
('OnFileManagerFileRemove', 1, 'System'),
('OnFileManagerFileRename', 1, 'System'),
('OnFileManagerFileUpdate', 1, 'System'),
('OnFileManagerMoveObject', 1, 'System'),
('OnFileManagerUpload', 1, 'System'),
('OnHandleRequest', 5, 'System'),
('OnInitCulture', 1, 'Internationalization'),
('OnLoadWebDocument', 5, 'System'),
('OnLoadWebPageCache', 4, 'System'),
('OnManagerAuthentication', 2, 'Security'),
('OnManagerLogin', 2, 'Security'),
('OnManagerLoginFormPrerender', 2, 'Security'),
('OnManagerLoginFormRender', 2, 'Security'),
('OnManagerLogout', 2, 'Security'),
('OnManagerPageAfterRender', 2, 'System'),
('OnManagerPageBeforeRender', 2, 'System'),
('OnManagerPageInit', 2, 'System'),
('OnMediaSourceBeforeFormDelete', 1, 'Media Sources'),
('OnMediaSourceBeforeFormSave', 1, 'Media Sources'),
('OnMediaSourceDuplicate', 1, 'Media Sources'),
('OnMediaSourceFormDelete', 1, 'Media Sources'),
('OnMediaSourceFormSave', 1, 'Media Sources'),
('OnMediaSourceGetProperties', 1, 'Media Sources'),
('OnMODXInit', 5, 'System'),
('OnPackageInstall', 2, 'Package Manager'),
('OnPackageRemove', 2, 'Package Manager'),
('OnPackageUninstall', 2, 'Package Manager'),
('OnPageNotFound', 1, 'System'),
('OnPageUnauthorized', 1, 'Security'),
('OnParseDocument', 5, 'System'),
('OnPluginBeforeRemove', 1, 'Plugins'),
('OnPluginBeforeSave', 1, 'Plugins'),
('OnPluginEventBeforeRemove', 1, 'Plugin Events'),
('OnPluginEventBeforeSave', 1, 'Plugin Events'),
('OnPluginEventRemove', 1, 'Plugin Events'),
('OnPluginEventSave', 1, 'Plugin Events'),
('OnPluginFormDelete', 1, 'Plugins'),
('OnPluginFormPrerender', 1, 'Plugins'),
('OnPluginFormRender', 1, 'Plugins'),
('OnPluginFormSave', 1, 'Plugins'),
('OnPluginRemove', 1, 'Plugins'),
('OnPluginSave', 1, 'Plugins'),
('OnPropertySetBeforeRemove', 1, 'Property Sets'),
('OnPropertySetBeforeSave', 1, 'Property Sets'),
('OnPropertySetRemove', 1, 'Property Sets'),
('OnPropertySetSave', 1, 'Property Sets'),
('OnResourceAddToResourceGroup', 1, 'Resources'),
('OnResourceAutoPublish', 1, 'Resources'),
('OnResourceBeforeSort', 1, 'Resources'),
('OnResourceCacheUpdate', 1, 'Resources'),
('OnResourceDelete', 1, 'Resources'),
('OnResourceDuplicate', 1, 'Resources'),
('OnResourceGroupBeforeRemove', 1, 'Security'),
('OnResourceGroupBeforeSave', 1, 'Security'),
('OnResourceGroupRemove', 1, 'Security'),
('OnResourceGroupSave', 1, 'Security'),
('OnResourceRemoveFromResourceGroup', 1, 'Resources'),
('OnResourceSort', 1, 'Resources'),
('OnResourceToolbarLoad', 1, 'Resources'),
('OnResourceTVFormPrerender', 1, 'Resources'),
('OnResourceTVFormRender', 1, 'Resources'),
('OnResourceUndelete', 1, 'Resources'),
('OnRichTextBrowserInit', 1, 'RichText Editor'),
('OnRichTextEditorInit', 1, 'RichText Editor'),
('OnRichTextEditorRegister', 1, 'RichText Editor'),
('OnSiteRefresh', 1, 'System'),
('OnSiteSettingsRender', 1, 'Settings'),
('OnSnipFormDelete', 1, 'Snippets'),
('OnSnipFormPrerender', 1, 'Snippets'),
('OnSnipFormRender', 1, 'Snippets'),
('OnSnipFormSave', 1, 'Snippets'),
('OnSnippetBeforeRemove', 1, 'Snippets'),
('OnSnippetBeforeSave', 1, 'Snippets'),
('OnSnippetRemove', 1, 'Snippets'),
('OnSnippetSave', 1, 'Snippets'),
('OnTempFormDelete', 1, 'Templates'),
('OnTempFormPrerender', 1, 'Templates'),
('OnTempFormRender', 1, 'Templates'),
('OnTempFormSave', 1, 'Templates'),
('OnTemplateBeforeRemove', 1, 'Templates'),
('OnTemplateBeforeSave', 1, 'Templates'),
('OnTemplateRemove', 1, 'Templates'),
('OnTemplateSave', 1, 'Templates'),
('OnTemplateVarBeforeRemove', 1, 'Template Variables'),
('OnTemplateVarBeforeSave', 1, 'Template Variables'),
('OnTemplateVarRemove', 1, 'Template Variables'),
('OnTemplateVarSave', 1, 'Template Variables'),
('OnTVFormDelete', 1, 'Template Variables'),
('OnTVFormPrerender', 1, 'Template Variables'),
('OnTVFormRender', 1, 'Template Variables'),
('OnTVFormSave', 1, 'Template Variables'),
('OnTVInputPropertiesList', 1, 'Template Variables'),
('OnTVInputRenderList', 1, 'Template Variables'),
('OnTVOutputRenderList', 1, 'Template Variables'),
('OnTVOutputRenderPropertiesList', 1, 'Template Variables'),
('OnUserActivate', 1, 'Users'),
('OnUserAddToGroup', 1, 'User Groups'),
('OnUserBeforeAddToGroup', 1, 'User Groups'),
('OnUserBeforeRemove', 1, 'Users'),
('OnUserBeforeRemoveFromGroup', 1, 'User Groups'),
('OnUserBeforeSave', 1, 'Users'),
('OnUserChangePassword', 1, 'Users'),
('OnUserDeactivate', 1, 'Users'),
('OnUserDuplicate', 1, 'Users'),
('OnUserFormDelete', 1, 'Users'),
('OnUserFormPrerender', 1, 'Users'),
('OnUserFormRender', 1, 'Users'),
('OnUserFormSave', 1, 'Users'),
('OnUserGroupBeforeRemove', 1, 'User Groups'),
('OnUserGroupBeforeSave', 1, 'User Groups'),
('OnUserGroupFormSave', 1, 'User Groups'),
('OnUserGroupRemove', 1, 'User Groups'),
('OnUserGroupSave', 1, 'User Groups'),
('OnUserNotFound', 1, 'Users'),
('OnUserProfileBeforeRemove', 1, 'User Profiles'),
('OnUserProfileBeforeSave', 1, 'User Profiles'),
('OnUserProfileRemove', 1, 'User Profiles'),
('OnUserProfileSave', 1, 'User Profiles'),
('OnUserRemove', 1, 'Users'),
('OnUserRemoveFromGroup', 1, 'User Groups'),
('OnUserSave', 1, 'Users'),
('OnWebAuthentication', 3, 'Security'),
('OnWebLogin', 3, 'Security'),
('OnWebLogout', 3, 'Security'),
('OnWebPageComplete', 5, 'System'),
('OnWebPageInit', 5, 'System'),
('OnWebPagePrerender', 5, 'System');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_system_settings`
--

CREATE TABLE `modx_system_settings` (
  `key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `xtype` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'textfield',
  `namespace` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editedon` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_system_settings`
--

INSERT INTO `modx_system_settings` (`key`, `value`, `xtype`, `namespace`, `area`, `editedon`) VALUES
('access_category_enabled', '1', 'combo-boolean', 'core', 'authentication', NULL),
('access_context_enabled', '1', 'combo-boolean', 'core', 'authentication', NULL),
('access_resource_group_enabled', '1', 'combo-boolean', 'core', 'authentication', NULL),
('allow_forward_across_contexts', '', 'combo-boolean', 'core', 'system', NULL),
('allow_manager_login_forgot_password', '1', 'combo-boolean', 'core', 'authentication', NULL),
('allow_multiple_emails', '1', 'combo-boolean', 'core', 'authentication', NULL),
('allow_tags_in_post', '', 'combo-boolean', 'core', 'system', NULL),
('anonymous_sessions', '1', 'combo-boolean', 'core', 'session', NULL),
('archive_with', '', 'combo-boolean', 'core', 'system', NULL),
('auto_check_pkg_updates', '1', 'combo-boolean', 'core', 'system', NULL),
('auto_check_pkg_updates_cache_expire', '15', 'numberfield', 'core', 'system', NULL),
('auto_isfolder', '1', 'combo-boolean', 'core', 'site', NULL),
('auto_menuindex', '1', 'combo-boolean', 'core', 'site', NULL),
('automatic_alias', '1', 'combo-boolean', 'core', 'furls', NULL),
('automatic_template_assignment', 'sibling', 'textfield', 'core', 'site', NULL),
('base_help_url', '//docs.modx.com/help/', 'textfield', 'core', 'manager', NULL),
('blocked_minutes', '60', 'numberfield', 'core', 'authentication', NULL),
('cache_alias_map', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_context_settings', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_db', '', 'combo-boolean', 'core', 'caching', NULL),
('cache_db_expires', '0', 'numberfield', 'core', 'caching', NULL),
('cache_db_session', '', 'combo-boolean', 'core', 'caching', NULL),
('cache_db_session_lifetime', '', 'numberfield', 'core', 'caching', NULL),
('cache_default', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_expires', '0', 'numberfield', 'core', 'caching', NULL),
('cache_format', '0', 'numberfield', 'core', 'caching', NULL),
('cache_handler', 'xPDO\\Cache\\xPDOFileCache', 'textfield', 'core', 'caching', NULL),
('cache_lang_js', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_lexicon_topics', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_noncore_lexicon_topics', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_resource', '1', 'combo-boolean', 'core', 'caching', NULL),
('cache_resource_clear_partial', '', 'combo-boolean', 'core', 'caching', NULL),
('cache_resource_expires', '0', 'numberfield', 'core', 'caching', NULL),
('cache_scripts', '1', 'combo-boolean', 'core', 'caching', NULL),
('clear_cache_refresh_trees', '', 'combo-boolean', 'core', 'caching', NULL),
('compress_css', '1', 'combo-boolean', 'core', 'manager', NULL),
('compress_js', '1', 'combo-boolean', 'core', 'manager', NULL),
('confirm_navigation', '1', 'combo-boolean', 'core', 'manager', NULL),
('container_suffix', '/', 'textfield', 'core', 'furls', NULL),
('context_tree_sort', '1', 'combo-boolean', 'core', 'manager', NULL),
('context_tree_sortby', 'rank', 'textfield', 'core', 'manager', NULL),
('context_tree_sortdir', 'ASC', 'textfield', 'core', 'manager', NULL),
('cultureKey', 'ru', 'modx-combo-language', 'core', 'language', '2024-05-20 08:58:07'),
('date_timezone', '', 'textfield', 'core', 'system', NULL),
('debug', '', 'numberfield', 'core', 'system', NULL),
('default_content_type', '1', 'modx-combo-content-type', 'core', 'site', NULL),
('default_context', 'web', 'modx-combo-context', 'core', 'site', NULL),
('default_duplicate_publish_option', 'preserve', 'textfield', 'core', 'manager', NULL),
('default_media_source', '1', 'modx-combo-source', 'core', 'manager', NULL),
('default_media_source_type', 'MODX\\Revolution\\Sources\\modFileMediaSource', 'modx-combo-source-type', 'core', 'manager', NULL),
('default_per_page', '20', 'textfield', 'core', 'manager', NULL),
('default_template', '1', 'modx-combo-template', 'core', 'site', NULL),
('default_username', '(anonymous)', 'textfield', 'core', 'session', NULL),
('emailsender', 'admin@example.com', 'textfield', 'core', 'authentication', '2024-05-20 08:58:07'),
('enable_dragdrop', '1', 'combo-boolean', 'core', 'manager', NULL),
('enable_gravatar', '', 'combo-boolean', 'core', 'manager', NULL),
('enable_template_picker_in_tree', '1', 'combo-boolean', 'core', 'manager', NULL),
('error_log_filename', 'error.log', 'textfield', 'core', 'system', NULL),
('error_log_filepath', '', 'textfield', 'core', 'system', NULL),
('error_page', '3', 'numberfield', 'core', 'site', '2024-05-24 06:09:37'),
('failed_login_attempts', '5', 'numberfield', 'core', 'authentication', NULL),
('feed_modx_news', 'https://feeds.feedburner.com/modx-announce', 'textfield', 'core', 'system', NULL),
('feed_modx_news_enabled', '1', 'combo-boolean', 'core', 'system', NULL),
('feed_modx_security', 'https://forums.modx.com/board.xml?board=294', 'textfield', 'core', 'system', NULL),
('feed_modx_security_enabled', '1', 'combo-boolean', 'core', 'system', NULL),
('form_customization_use_all_groups', '', 'combo-boolean', 'core', 'manager', NULL),
('forward_merge_excludes', 'type,published,class_key', 'textfield', 'core', 'system', NULL),
('friendly_alias_lowercase_only', '1', 'combo-boolean', 'core', 'furls', NULL),
('friendly_alias_max_length', '0', 'numberfield', 'core', 'furls', NULL),
('friendly_alias_realtime', '1', 'combo-boolean', 'core', 'furls', '2024-05-20 09:53:09'),
('friendly_alias_restrict_chars', 'pattern', 'textfield', 'core', 'furls', NULL),
('friendly_alias_restrict_chars_pattern', '/[\\0\\x0B\\t\\n\\r\\f\\a&=+%#<>\"~:`@\\?\\[\\]\\{\\}\\|\\^\'\\\\]/', 'textfield', 'core', 'furls', NULL),
('friendly_alias_strip_element_tags', '1', 'combo-boolean', 'core', 'furls', NULL),
('friendly_alias_translit', 'none', 'textfield', 'core', 'furls', NULL),
('friendly_alias_translit_class', 'translit.modTransliterate', 'textfield', 'core', 'furls', NULL),
('friendly_alias_translit_class_path', '{core_path}components/', 'textfield', 'core', 'furls', NULL),
('friendly_alias_trim_chars', '/.-_', 'textfield', 'core', 'furls', NULL),
('friendly_alias_word_delimiter', '-', 'textfield', 'core', 'furls', NULL),
('friendly_alias_word_delimiters', '-_', 'textfield', 'core', 'furls', NULL),
('friendly_urls', '1', 'combo-boolean', 'core', 'furls', '2024-05-20 09:53:29'),
('friendly_urls_strict', '', 'combo-boolean', 'core', 'furls', NULL),
('global_duplicate_uri_check', '', 'combo-boolean', 'core', 'furls', NULL),
('hidemenu_default', '', 'combo-boolean', 'core', 'site', NULL),
('inline_help', '1', 'combo-boolean', 'core', 'manager', NULL),
('link_tag_scheme', '-1', 'textfield', 'core', 'site', NULL),
('locale', '', 'textfield', 'core', 'language', NULL),
('lock_ttl', '360', 'numberfield', 'core', 'system', NULL),
('log_deprecated', '1', 'combo-boolean', 'core', 'system', NULL),
('log_level', '1', 'numberfield', 'core', 'system', NULL),
('log_snippet_not_found', '1', 'combo-boolean', 'core', 'site', NULL),
('log_target', 'FILE', 'textfield', 'core', 'system', NULL),
('login_background_image', '', 'textfield', 'core', 'authentication', NULL),
('login_help_button', '', 'combo-boolean', 'core', 'authentication', NULL),
('login_logo', '', 'textfield', 'core', 'authentication', NULL),
('mail_charset', 'UTF-8', 'modx-combo-charset', 'core', 'mail', NULL),
('mail_encoding', '8bit', 'textfield', 'core', 'mail', NULL),
('mail_smtp_auth', '', 'combo-boolean', 'core', 'mail', NULL),
('mail_smtp_autotls', '1', 'combo-boolean', 'core', 'mail', NULL),
('mail_smtp_helo', '', 'textfield', 'core', 'mail', NULL),
('mail_smtp_hosts', 'localhost', 'textfield', 'core', 'mail', NULL),
('mail_smtp_keepalive', '', 'combo-boolean', 'core', 'mail', NULL),
('mail_smtp_pass', '', 'text-password', 'core', 'mail', NULL),
('mail_smtp_port', '587', 'numberfield', 'core', 'mail', NULL),
('mail_smtp_secure', '', 'textfield', 'core', 'mail', NULL),
('mail_smtp_single_to', '', 'combo-boolean', 'core', 'mail', NULL),
('mail_smtp_timeout', '10', 'numberfield', 'core', 'mail', NULL),
('mail_smtp_user', '', 'textfield', 'core', 'mail', NULL),
('mail_use_smtp', '', 'combo-boolean', 'core', 'mail', NULL),
('main_nav_parent', 'topnav', 'textfield', 'core', 'manager', NULL),
('manager_date_format', 'Y-m-d', 'textfield', 'core', 'manager', NULL),
('manager_direction', 'ltr', 'textfield', 'core', 'language', NULL),
('manager_favicon_url', 'favicon.ico', 'textfield', 'core', 'manager', NULL),
('manager_login_url_alternate', '', 'textfield', 'core', 'authentication', NULL),
('manager_logo', '', 'textfield', 'core', 'manager', NULL),
('manager_theme', 'default', 'modx-combo-manager-theme', 'core', 'manager', NULL),
('manager_time_format', 'H:i', 'textfield', 'core', 'manager', NULL),
('manager_tooltip_delay', '2300', 'numberfield', 'core', 'manager', NULL),
('manager_tooltip_enable', '1', 'combo-boolean', 'core', 'manager', NULL),
('manager_use_fullname', '', 'combo-boolean', 'core', 'manager', NULL),
('manager_week_start', '0', 'numberfield', 'core', 'manager', NULL),
('mgr_source_icon', 'icon-folder-open-o', 'textfield', 'core', 'manager', NULL),
('mgr_tree_icon_context', 'tree-context', 'textfield', 'core', 'manager', NULL),
('modx_browser_default_sort', 'name', 'textfield', 'core', 'manager', NULL),
('modx_browser_default_viewmode', 'grid', 'textfield', 'core', 'manager', NULL),
('modx_browser_tree_hide_files', '1', 'combo-boolean', 'core', 'manager', NULL),
('modx_browser_tree_hide_tooltips', '1', 'combo-boolean', 'core', 'manager', NULL),
('modx_charset', 'UTF-8', 'modx-combo-charset', 'core', 'language', NULL),
('parser_recurse_uncacheable', '1', 'combo-boolean', 'core', 'system', NULL),
('password_generated_length', '10', 'numberfield', 'core', 'authentication', NULL),
('password_min_length', '8', 'numberfield', 'core', 'authentication', NULL),
('passwordless_activated', '', 'combo-boolean', 'core', 'authentication', NULL),
('passwordless_expiration', '3600', 'textfield', 'core', 'authentication', NULL),
('phpthumb_allow_src_above_docroot', '', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_cache_maxage', '30', 'numberfield', 'core', 'phpthumb', NULL),
('phpthumb_cache_maxfiles', '10000', 'numberfield', 'core', 'phpthumb', NULL),
('phpthumb_cache_maxsize', '100', 'numberfield', 'core', 'phpthumb', NULL),
('phpthumb_cache_source_enabled', '', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_document_root', '', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_error_bgcolor', 'CCCCFF', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_error_fontsize', '1', 'numberfield', 'core', 'phpthumb', NULL),
('phpthumb_error_textcolor', 'FF0000', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_far', 'C', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_imagemagick_path', '', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_nohotlink_enabled', '1', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_nohotlink_erase_image', '1', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_nohotlink_text_message', 'Off-server thumbnailing is not allowed', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_nohotlink_valid_domains', '{http_host}', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_nooffsitelink_enabled', '', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_nooffsitelink_erase_image', '1', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_nooffsitelink_require_refer', '', 'combo-boolean', 'core', 'phpthumb', NULL),
('phpthumb_nooffsitelink_text_message', 'Off-server linking is not allowed', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_nooffsitelink_valid_domains', '{http_host}', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_nooffsitelink_watermark_src', '', 'textfield', 'core', 'phpthumb', NULL),
('phpthumb_zoomcrop', '0', 'textfield', 'core', 'phpthumb', NULL),
('preserve_menuindex', '', 'combo-boolean', 'core', 'manager', NULL),
('principal_targets', 'MODX\\Revolution\\modAccessContext,MODX\\Revolution\\modAccessResourceGroup,MODX\\Revolution\\modAccessCategory,MODX\\Revolution\\Sources\\modAccessMediaSource,MODX\\Revolution\\modAccessNamespace', 'textfield', 'core', 'authentication', NULL),
('proxy_auth_type', 'BASIC', 'textfield', 'core', 'proxy', NULL),
('proxy_host', '', 'textfield', 'core', 'proxy', NULL),
('proxy_password', '', 'text-password', 'core', 'proxy', NULL),
('proxy_port', '', 'numberfield', 'core', 'proxy', NULL),
('proxy_username', '', 'textfield', 'core', 'proxy', NULL),
('publish_default', '', 'combo-boolean', 'core', 'site', NULL),
('quick_search_in_content', '1', 'combo-boolean', 'core', 'manager', NULL),
('quick_search_result_max', '10', 'numberfield', 'core', 'manager', NULL),
('request_controller', 'index.php', 'textfield', 'core', 'gateway', NULL),
('request_method_strict', '', 'combo-boolean', 'core', 'gateway', NULL),
('request_param_alias', 'q', 'textfield', 'core', 'gateway', NULL),
('request_param_id', 'id', 'textfield', 'core', 'gateway', NULL),
('resource_static_allow_absolute', '0', 'combo-boolean', 'core', 'static_resources', NULL),
('resource_static_path', '{assets_path}', 'textfield', 'core', 'static_resources', NULL),
('resource_tree_node_name', 'pagetitle', 'textfield', 'core', 'manager', NULL),
('resource_tree_node_name_fallback', 'alias', 'textfield', 'core', 'manager', NULL),
('resource_tree_node_tooltip', '', 'textfield', 'core', 'manager', NULL),
('richtext_default', '1', 'combo-boolean', 'core', 'manager', NULL),
('search_default', '1', 'combo-boolean', 'core', 'site', NULL),
('send_poweredby_header', '1', 'combo-boolean', 'core', 'system', '2024-05-20 08:58:07'),
('server_offset_time', '0', 'numberfield', 'core', 'system', NULL),
('session_cookie_domain', '', 'textfield', 'core', 'session', NULL),
('session_cookie_httponly', '1', 'combo-boolean', 'core', 'session', NULL),
('session_cookie_lifetime', '604800', 'numberfield', 'core', 'session', NULL),
('session_cookie_path', '', 'textfield', 'core', 'session', NULL),
('session_cookie_samesite', '', 'textfield', 'core', 'session', NULL),
('session_cookie_secure', '', 'combo-boolean', 'core', 'session', NULL),
('session_gc_maxlifetime', '604800', 'textfield', 'core', 'session', NULL),
('session_handler_class', 'MODX\\Revolution\\modSessionHandler', 'textfield', 'core', 'session', NULL),
('session_name', '', 'textfield', 'core', 'session', NULL),
('set_header', '1', 'combo-boolean', 'core', 'system', NULL),
('settings_distro', 'traditional', 'textfield', 'core', 'system', NULL),
('settings_version', '3.0.5-pl', 'textfield', 'core', 'system', NULL),
('show_tv_categories_header', '1', 'combo-boolean', 'core', 'manager', NULL),
('site_name', 'MODX Revolution', 'textfield', 'core', 'site', NULL),
('site_start', '1', 'numberfield', 'core', 'site', NULL),
('site_status', '1', 'combo-boolean', 'core', 'site', NULL),
('site_unavailable_message', '[[%site_unavailable_message]]', 'textfield', 'core', 'site', NULL),
('site_unavailable_page', '0', 'numberfield', 'core', 'site', NULL),
('static_elements_automate_chunks', '', 'combo-boolean', 'core', 'static_elements', NULL),
('static_elements_automate_plugins', '', 'combo-boolean', 'core', 'static_elements', NULL),
('static_elements_automate_snippets', '', 'combo-boolean', 'core', 'static_elements', NULL),
('static_elements_automate_templates', '', 'combo-boolean', 'core', 'static_elements', NULL),
('static_elements_automate_tvs', '', 'combo-boolean', 'core', 'static_elements', NULL),
('static_elements_basepath', '', 'textfield', 'core', 'static_elements', NULL),
('static_elements_default_category', '0', 'modx-combo-category', 'core', 'static_elements', NULL),
('static_elements_default_mediasource', '0', 'modx-combo-source', 'core', 'static_elements', NULL),
('static_elements_html_extension', '.tpl', 'textfield', 'core', 'static_elements', NULL),
('symlink_merge_fields', '1', 'combo-boolean', 'core', 'site', NULL),
('syncsite_default', '1', 'combo-boolean', 'core', 'caching', NULL),
('topmenu_show_descriptions', '1', 'combo-boolean', 'core', 'manager', NULL),
('tree_default_sort', 'menuindex', 'textfield', 'core', 'manager', NULL),
('tree_root_id', '0', 'numberfield', 'core', 'manager', NULL),
('tvs_below_content', '', 'combo-boolean', 'core', 'manager', NULL),
('unauthorized_page', '1', 'numberfield', 'core', 'site', NULL),
('upload_file_exists', '1', 'combo-boolean', 'core', 'file', NULL),
('upload_files', 'txt,html,htm,xml,js,js.map,css,scss,less,css.map,zip,gz,rar,z,tgz,tar,mp3,mp4,aac,wav,au,wmv,avi,mpg,mpeg,pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png,tiff,svg,svgz,gif,psd,ico,bmp,webp,odt,ods,odp,odb,odg,odf,md,ttf,woff,woff2,eot', 'textfield', 'core', 'file', NULL),
('upload_images', 'jpg,jpeg,png,gif,psd,ico,bmp,tiff,svg,svgz,webp', 'textfield', 'core', 'file', NULL),
('upload_maxsize', '52428800', 'numberfield', 'core', 'file', '2024-05-20 08:58:07'),
('upload_media', 'mp3,wav,au,wmv,avi,mpg,mpeg', 'textfield', 'core', 'file', NULL),
('upload_translit', '1', 'combo-boolean', 'core', 'file', NULL),
('use_alias_path', '1', 'combo-boolean', 'core', 'furls', '2024-05-21 11:35:38'),
('use_context_resource_table', '1', 'combo-boolean', 'core', 'caching', NULL),
('use_editor', '1', 'combo-boolean', 'core', 'editor', NULL),
('use_frozen_parent_uris', '', 'combo-boolean', 'core', 'furls', NULL),
('use_multibyte', '1', 'combo-boolean', 'core', 'language', '2024-05-20 08:58:07'),
('use_weblink_target', '', 'combo-boolean', 'core', 'site', NULL),
('user_nav_parent', 'usernav', 'textfield', 'core', 'manager', NULL),
('welcome_action', 'welcome', 'textfield', 'core', 'manager', NULL),
('welcome_namespace', 'core', 'textfield', 'core', 'manager', NULL),
('welcome_screen', '', 'combo-boolean', 'core', 'manager', '2024-05-20 08:59:14'),
('welcome_screen_url', '//misc.modx.com/revolution/welcome.30.html ', 'textfield', 'core', 'manager', NULL),
('which_editor', '', 'modx-combo-rte', 'core', 'editor', NULL),
('which_element_editor', '', 'modx-combo-rte', 'core', 'editor', NULL),
('xhtml_urls', '1', 'combo-boolean', 'core', 'site', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_transport_packages`
--

CREATE TABLE `modx_transport_packages` (
  `signature` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `installed` datetime DEFAULT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `workspace` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `provider` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `disabled` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `source` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manifest` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attributes` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadata` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `version_major` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `version_minor` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `version_patch` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `release` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `release_index` smallint(5) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_transport_providers`
--

CREATE TABLE `modx_transport_providers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_url` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `api_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created` datetime NOT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `priority` tinyint(4) NOT NULL DEFAULT 10,
  `properties` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_transport_providers`
--

INSERT INTO `modx_transport_providers` (`id`, `name`, `description`, `service_url`, `username`, `api_key`, `created`, `updated`, `active`, `priority`, `properties`) VALUES
(1, 'modx.com', 'The official MODX transport provider for 3rd party components.', 'https://rest.modx.com/extras/', '', '', '2024-04-10 08:18:02', NULL, 1, 10, '');

-- --------------------------------------------------------

--
-- Структура таблицы `modx_users`
--

CREATE TABLE `modx_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `cachepwd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `class_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\modUser',
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `remote_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remote_data` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hash_class` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MODX\\Revolution\\Hashing\\modNative',
  `salt` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `primary_group` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `session_stale` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sudo` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `createdon` int(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_users`
--

INSERT INTO `modx_users` (`id`, `username`, `password`, `cachepwd`, `class_key`, `active`, `remote_key`, `remote_data`, `hash_class`, `salt`, `primary_group`, `session_stale`, `sudo`, `createdon`) VALUES
(1, 'admin', '$2y$10$pv4Pqs6.KtlPxJlpNKaNmO4H50COMoqhCnaoLFfVblM5N.ENHiX7K', '', 'MODX\\Revolution\\modUser', 1, NULL, NULL, 'MODX\\Revolution\\Hashing\\modNative', '25da65dd759bd79f4d066586a5ac3417', 1, NULL, 1, 1716195487);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_user_attributes`
--

CREATE TABLE `modx_user_attributes` (
  `id` int(10) UNSIGNED NOT NULL,
  `internalKey` int(10) UNSIGNED NOT NULL,
  `fullname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mobilephone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `blocked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `blockeduntil` int(11) NOT NULL DEFAULT 0,
  `blockedafter` int(11) NOT NULL DEFAULT 0,
  `logincount` int(11) NOT NULL DEFAULT 0,
  `lastlogin` int(11) NOT NULL DEFAULT 0,
  `thislogin` int(11) NOT NULL DEFAULT 0,
  `failedlogincount` int(10) NOT NULL DEFAULT 0,
  `sessionid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `dob` int(10) NOT NULL DEFAULT 0,
  `gender` tinyint(1) NOT NULL DEFAULT 0,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `state` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `zip` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `fax` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `extended` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_user_attributes`
--

INSERT INTO `modx_user_attributes` (`id`, `internalKey`, `fullname`, `email`, `phone`, `mobilephone`, `blocked`, `blockeduntil`, `blockedafter`, `logincount`, `lastlogin`, `thislogin`, `failedlogincount`, `sessionid`, `dob`, `gender`, `address`, `country`, `city`, `state`, `zip`, `fax`, `photo`, `comment`, `website`, `extended`) VALUES
(1, 1, 'Администратор по умолчанию', 'admin@example.com', '', '', 0, 0, 0, 1, 0, 1716195554, 0, '7aubi77jlu9gqovnlfqcdq4linpl5ber', 0, 0, '', '', '', '', '', '', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_user_group_roles`
--

CREATE TABLE `modx_user_group_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `authority` int(10) UNSIGNED NOT NULL DEFAULT 9999
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_user_group_roles`
--

INSERT INTO `modx_user_group_roles` (`id`, `name`, `description`, `authority`) VALUES
(1, 'Member', NULL, 9999),
(2, 'Super User', NULL, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `modx_user_group_settings`
--

CREATE TABLE `modx_user_group_settings` (
  `group` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `xtype` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'textfield',
  `namespace` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editedon` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_user_messages`
--

CREATE TABLE `modx_user_messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `recipient` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `private` tinyint(4) NOT NULL DEFAULT 0,
  `date_sent` datetime DEFAULT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_user_settings`
--

CREATE TABLE `modx_user_settings` (
  `user` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `value` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `xtype` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'textfield',
  `namespace` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'core',
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `editedon` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_workspaces`
--

CREATE TABLE `modx_workspaces` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created` datetime NOT NULL,
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `attributes` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `modx_workspaces`
--

INSERT INTO `modx_workspaces` (`id`, `name`, `path`, `created`, `active`, `attributes`) VALUES
(1, 'Default MODX workspace', '{core_path}', '2024-05-20 11:57:56', 1, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `modx_access_actiondom`
--
ALTER TABLE `modx_access_actiondom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`);

--
-- Индексы таблицы `modx_access_category`
--
ALTER TABLE `modx_access_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_access_context`
--
ALTER TABLE `modx_access_context`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`);

--
-- Индексы таблицы `modx_access_elements`
--
ALTER TABLE `modx_access_elements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_access_media_source`
--
ALTER TABLE `modx_access_media_source`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_access_menus`
--
ALTER TABLE `modx_access_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`);

--
-- Индексы таблицы `modx_access_namespace`
--
ALTER TABLE `modx_access_namespace`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_access_permissions`
--
ALTER TABLE `modx_access_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `template` (`template`),
  ADD KEY `name` (`name`);

--
-- Индексы таблицы `modx_access_policies`
--
ALTER TABLE `modx_access_policies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `parent` (`parent`),
  ADD KEY `class` (`class`),
  ADD KEY `template` (`template`);

--
-- Индексы таблицы `modx_access_policy_templates`
--
ALTER TABLE `modx_access_policy_templates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `modx_access_policy_template_groups`
--
ALTER TABLE `modx_access_policy_template_groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `modx_access_resources`
--
ALTER TABLE `modx_access_resources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_access_resource_groups`
--
ALTER TABLE `modx_access_resource_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`,`target`,`principal`,`authority`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_access_templatevars`
--
ALTER TABLE `modx_access_templatevars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target` (`target`),
  ADD KEY `principal_class` (`principal_class`),
  ADD KEY `principal` (`principal`),
  ADD KEY `authority` (`authority`),
  ADD KEY `policy` (`policy`),
  ADD KEY `context_key` (`context_key`);

--
-- Индексы таблицы `modx_actiondom`
--
ALTER TABLE `modx_actiondom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `set` (`set`),
  ADD KEY `action` (`action`),
  ADD KEY `name` (`name`),
  ADD KEY `active` (`active`),
  ADD KEY `for_parent` (`for_parent`),
  ADD KEY `rank` (`rank`);

--
-- Индексы таблицы `modx_actions_fields`
--
ALTER TABLE `modx_actions_fields`
  ADD PRIMARY KEY (`id`),
  ADD KEY `action` (`action`),
  ADD KEY `type` (`type`),
  ADD KEY `tab` (`tab`);

--
-- Индексы таблицы `modx_active_users`
--
ALTER TABLE `modx_active_users`
  ADD PRIMARY KEY (`internalKey`);

--
-- Индексы таблицы `modx_categories`
--
ALTER TABLE `modx_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category` (`parent`,`category`),
  ADD KEY `parent` (`parent`),
  ADD KEY `rank` (`rank`);

--
-- Индексы таблицы `modx_categories_closure`
--
ALTER TABLE `modx_categories_closure`
  ADD PRIMARY KEY (`ancestor`,`descendant`);

--
-- Индексы таблицы `modx_content_type`
--
ALTER TABLE `modx_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `modx_context`
--
ALTER TABLE `modx_context`
  ADD PRIMARY KEY (`key`),
  ADD KEY `name` (`name`),
  ADD KEY `rank` (`rank`);

--
-- Индексы таблицы `modx_context_resource`
--
ALTER TABLE `modx_context_resource`
  ADD PRIMARY KEY (`context_key`,`resource`);

--
-- Индексы таблицы `modx_context_setting`
--
ALTER TABLE `modx_context_setting`
  ADD PRIMARY KEY (`context_key`,`key`);

--
-- Индексы таблицы `modx_dashboard`
--
ALTER TABLE `modx_dashboard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `hide_trees` (`hide_trees`);

--
-- Индексы таблицы `modx_dashboard_widget`
--
ALTER TABLE `modx_dashboard_widget`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `type` (`type`),
  ADD KEY `namespace` (`namespace`),
  ADD KEY `lexicon` (`lexicon`);

--
-- Индексы таблицы `modx_dashboard_widget_placement`
--
ALTER TABLE `modx_dashboard_widget_placement`
  ADD PRIMARY KEY (`user`,`dashboard`,`widget`),
  ADD KEY `rank` (`rank`);

--
-- Индексы таблицы `modx_deprecated_call`
--
ALTER TABLE `modx_deprecated_call`
  ADD PRIMARY KEY (`id`),
  ADD KEY `method` (`method`),
  ADD KEY `call_count` (`call_count`),
  ADD KEY `caller` (`caller`),
  ADD KEY `caller_file` (`caller_file`),
  ADD KEY `caller_line` (`caller_line`);

--
-- Индексы таблицы `modx_deprecated_method`
--
ALTER TABLE `modx_deprecated_method`
  ADD PRIMARY KEY (`id`),
  ADD KEY `definition` (`definition`);

--
-- Индексы таблицы `modx_documentgroup_names`
--
ALTER TABLE `modx_documentgroup_names`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `modx_document_groups`
--
ALTER TABLE `modx_document_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `document_group` (`document_group`),
  ADD KEY `document` (`document`);

--
-- Индексы таблицы `modx_element_property_sets`
--
ALTER TABLE `modx_element_property_sets`
  ADD PRIMARY KEY (`element`,`element_class`,`property_set`);

--
-- Индексы таблицы `modx_extension_packages`
--
ALTER TABLE `modx_extension_packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `namespace` (`namespace`),
  ADD KEY `name` (`name`);

--
-- Индексы таблицы `modx_fc_profiles`
--
ALTER TABLE `modx_fc_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `rank` (`rank`),
  ADD KEY `active` (`active`);

--
-- Индексы таблицы `modx_fc_profiles_usergroups`
--
ALTER TABLE `modx_fc_profiles_usergroups`
  ADD PRIMARY KEY (`usergroup`,`profile`);

--
-- Индексы таблицы `modx_fc_sets`
--
ALTER TABLE `modx_fc_sets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profile` (`profile`),
  ADD KEY `action` (`action`),
  ADD KEY `active` (`active`),
  ADD KEY `template` (`template`);

--
-- Индексы таблицы `modx_lexicon_entries`
--
ALTER TABLE `modx_lexicon_entries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `topic` (`topic`),
  ADD KEY `namespace` (`namespace`),
  ADD KEY `language` (`language`);

--
-- Индексы таблицы `modx_manager_log`
--
ALTER TABLE `modx_manager_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_occurred` (`user`,`occurred`);

--
-- Индексы таблицы `modx_media_sources`
--
ALTER TABLE `modx_media_sources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `class_key` (`class_key`),
  ADD KEY `is_stream` (`is_stream`);

--
-- Индексы таблицы `modx_media_sources_contexts`
--
ALTER TABLE `modx_media_sources_contexts`
  ADD PRIMARY KEY (`source`,`context_key`);

--
-- Индексы таблицы `modx_media_sources_elements`
--
ALTER TABLE `modx_media_sources_elements`
  ADD PRIMARY KEY (`source`,`object`,`object_class`,`context_key`);

--
-- Индексы таблицы `modx_membergroup_names`
--
ALTER TABLE `modx_membergroup_names`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `parent` (`parent`),
  ADD KEY `rank` (`rank`),
  ADD KEY `dashboard` (`dashboard`);

--
-- Индексы таблицы `modx_member_groups`
--
ALTER TABLE `modx_member_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`),
  ADD KEY `rank` (`rank`);

--
-- Индексы таблицы `modx_menus`
--
ALTER TABLE `modx_menus`
  ADD PRIMARY KEY (`text`),
  ADD KEY `parent` (`parent`),
  ADD KEY `action` (`action`),
  ADD KEY `namespace` (`namespace`);

--
-- Индексы таблицы `modx_namespaces`
--
ALTER TABLE `modx_namespaces`
  ADD PRIMARY KEY (`name`);

--
-- Индексы таблицы `modx_property_set`
--
ALTER TABLE `modx_property_set`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category` (`category`);

--
-- Индексы таблицы `modx_register_messages`
--
ALTER TABLE `modx_register_messages`
  ADD PRIMARY KEY (`topic`,`id`),
  ADD KEY `created` (`created`),
  ADD KEY `valid` (`valid`),
  ADD KEY `accessed` (`accessed`),
  ADD KEY `accesses` (`accesses`),
  ADD KEY `expires` (`expires`);

--
-- Индексы таблицы `modx_register_queues`
--
ALTER TABLE `modx_register_queues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `modx_register_topics`
--
ALTER TABLE `modx_register_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `queue` (`queue`),
  ADD KEY `name` (`name`);

--
-- Индексы таблицы `modx_session`
--
ALTER TABLE `modx_session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `access` (`access`);

--
-- Индексы таблицы `modx_site_content`
--
ALTER TABLE `modx_site_content`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alias` (`alias`),
  ADD KEY `published` (`published`),
  ADD KEY `pub_date` (`pub_date`),
  ADD KEY `unpub_date` (`unpub_date`),
  ADD KEY `parent` (`parent`),
  ADD KEY `isfolder` (`isfolder`),
  ADD KEY `template` (`template`),
  ADD KEY `menuindex` (`menuindex`),
  ADD KEY `searchable` (`searchable`),
  ADD KEY `cacheable` (`cacheable`),
  ADD KEY `hidemenu` (`hidemenu`),
  ADD KEY `class_key` (`class_key`),
  ADD KEY `context_key` (`context_key`),
  ADD KEY `uri` (`uri`(191)),
  ADD KEY `uri_override` (`uri_override`),
  ADD KEY `hide_children_in_tree` (`hide_children_in_tree`),
  ADD KEY `show_in_tree` (`show_in_tree`),
  ADD KEY `cache_refresh_idx` (`parent`,`menuindex`,`id`);
ALTER TABLE `modx_site_content` ADD FULLTEXT KEY `content_ft_idx` (`pagetitle`,`longtitle`,`description`,`introtext`,`content`);

--
-- Индексы таблицы `modx_site_htmlsnippets`
--
ALTER TABLE `modx_site_htmlsnippets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category` (`category`),
  ADD KEY `locked` (`locked`),
  ADD KEY `static` (`static`);

--
-- Индексы таблицы `modx_site_plugins`
--
ALTER TABLE `modx_site_plugins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category` (`category`),
  ADD KEY `locked` (`locked`),
  ADD KEY `disabled` (`disabled`),
  ADD KEY `static` (`static`);

--
-- Индексы таблицы `modx_site_plugin_events`
--
ALTER TABLE `modx_site_plugin_events`
  ADD PRIMARY KEY (`pluginid`,`event`),
  ADD KEY `priority` (`priority`);

--
-- Индексы таблицы `modx_site_snippets`
--
ALTER TABLE `modx_site_snippets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category` (`category`),
  ADD KEY `locked` (`locked`),
  ADD KEY `moduleguid` (`moduleguid`),
  ADD KEY `static` (`static`);

--
-- Индексы таблицы `modx_site_templates`
--
ALTER TABLE `modx_site_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `templatename` (`templatename`),
  ADD KEY `category` (`category`),
  ADD KEY `locked` (`locked`),
  ADD KEY `static` (`static`);

--
-- Индексы таблицы `modx_site_tmplvars`
--
ALTER TABLE `modx_site_tmplvars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category` (`category`),
  ADD KEY `locked` (`locked`),
  ADD KEY `rank` (`rank`),
  ADD KEY `static` (`static`);

--
-- Индексы таблицы `modx_site_tmplvar_access`
--
ALTER TABLE `modx_site_tmplvar_access`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tmplvar_template` (`tmplvarid`,`documentgroup`);

--
-- Индексы таблицы `modx_site_tmplvar_contentvalues`
--
ALTER TABLE `modx_site_tmplvar_contentvalues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tv_cnt` (`tmplvarid`,`contentid`),
  ADD KEY `tmplvarid` (`tmplvarid`),
  ADD KEY `contentid` (`contentid`);

--
-- Индексы таблицы `modx_site_tmplvar_templates`
--
ALTER TABLE `modx_site_tmplvar_templates`
  ADD PRIMARY KEY (`tmplvarid`,`templateid`);

--
-- Индексы таблицы `modx_system_eventnames`
--
ALTER TABLE `modx_system_eventnames`
  ADD PRIMARY KEY (`name`);

--
-- Индексы таблицы `modx_system_settings`
--
ALTER TABLE `modx_system_settings`
  ADD PRIMARY KEY (`key`);

--
-- Индексы таблицы `modx_transport_packages`
--
ALTER TABLE `modx_transport_packages`
  ADD PRIMARY KEY (`signature`),
  ADD KEY `workspace` (`workspace`),
  ADD KEY `provider` (`provider`),
  ADD KEY `disabled` (`disabled`),
  ADD KEY `package_name` (`package_name`),
  ADD KEY `version_major` (`version_major`),
  ADD KEY `version_minor` (`version_minor`),
  ADD KEY `version_patch` (`version_patch`),
  ADD KEY `release` (`release`),
  ADD KEY `release_index` (`release_index`);

--
-- Индексы таблицы `modx_transport_providers`
--
ALTER TABLE `modx_transport_providers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `api_key` (`api_key`),
  ADD KEY `username` (`username`),
  ADD KEY `active` (`active`),
  ADD KEY `priority` (`priority`);

--
-- Индексы таблицы `modx_users`
--
ALTER TABLE `modx_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `class_key` (`class_key`),
  ADD KEY `remote_key` (`remote_key`),
  ADD KEY `primary_group` (`primary_group`);

--
-- Индексы таблицы `modx_user_attributes`
--
ALTER TABLE `modx_user_attributes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `internalKey` (`internalKey`);

--
-- Индексы таблицы `modx_user_group_roles`
--
ALTER TABLE `modx_user_group_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `authority` (`authority`);

--
-- Индексы таблицы `modx_user_group_settings`
--
ALTER TABLE `modx_user_group_settings`
  ADD PRIMARY KEY (`group`,`key`);

--
-- Индексы таблицы `modx_user_messages`
--
ALTER TABLE `modx_user_messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `modx_user_settings`
--
ALTER TABLE `modx_user_settings`
  ADD PRIMARY KEY (`user`,`key`);

--
-- Индексы таблицы `modx_workspaces`
--
ALTER TABLE `modx_workspaces`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `path` (`path`),
  ADD KEY `name` (`name`),
  ADD KEY `active` (`active`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `modx_access_actiondom`
--
ALTER TABLE `modx_access_actiondom`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_category`
--
ALTER TABLE `modx_access_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_context`
--
ALTER TABLE `modx_access_context`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `modx_access_elements`
--
ALTER TABLE `modx_access_elements`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_media_source`
--
ALTER TABLE `modx_access_media_source`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_menus`
--
ALTER TABLE `modx_access_menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_namespace`
--
ALTER TABLE `modx_access_namespace`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_permissions`
--
ALTER TABLE `modx_access_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=229;

--
-- AUTO_INCREMENT для таблицы `modx_access_policies`
--
ALTER TABLE `modx_access_policies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `modx_access_policy_templates`
--
ALTER TABLE `modx_access_policy_templates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `modx_access_policy_template_groups`
--
ALTER TABLE `modx_access_policy_template_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `modx_access_resources`
--
ALTER TABLE `modx_access_resources`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_resource_groups`
--
ALTER TABLE `modx_access_resource_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_access_templatevars`
--
ALTER TABLE `modx_access_templatevars`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_actiondom`
--
ALTER TABLE `modx_actiondom`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_actions_fields`
--
ALTER TABLE `modx_actions_fields`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT для таблицы `modx_categories`
--
ALTER TABLE `modx_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_content_type`
--
ALTER TABLE `modx_content_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `modx_dashboard`
--
ALTER TABLE `modx_dashboard`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_dashboard_widget`
--
ALTER TABLE `modx_dashboard_widget`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `modx_deprecated_call`
--
ALTER TABLE `modx_deprecated_call`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_deprecated_method`
--
ALTER TABLE `modx_deprecated_method`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_documentgroup_names`
--
ALTER TABLE `modx_documentgroup_names`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_document_groups`
--
ALTER TABLE `modx_document_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_extension_packages`
--
ALTER TABLE `modx_extension_packages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_fc_profiles`
--
ALTER TABLE `modx_fc_profiles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_fc_sets`
--
ALTER TABLE `modx_fc_sets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_lexicon_entries`
--
ALTER TABLE `modx_lexicon_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_manager_log`
--
ALTER TABLE `modx_manager_log`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT для таблицы `modx_media_sources`
--
ALTER TABLE `modx_media_sources`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_membergroup_names`
--
ALTER TABLE `modx_membergroup_names`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_member_groups`
--
ALTER TABLE `modx_member_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_property_set`
--
ALTER TABLE `modx_property_set`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_register_queues`
--
ALTER TABLE `modx_register_queues`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_register_topics`
--
ALTER TABLE `modx_register_topics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_site_content`
--
ALTER TABLE `modx_site_content`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `modx_site_htmlsnippets`
--
ALTER TABLE `modx_site_htmlsnippets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `modx_site_plugins`
--
ALTER TABLE `modx_site_plugins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_site_snippets`
--
ALTER TABLE `modx_site_snippets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_site_templates`
--
ALTER TABLE `modx_site_templates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_site_tmplvars`
--
ALTER TABLE `modx_site_tmplvars`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_site_tmplvar_access`
--
ALTER TABLE `modx_site_tmplvar_access`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_site_tmplvar_contentvalues`
--
ALTER TABLE `modx_site_tmplvar_contentvalues`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_transport_providers`
--
ALTER TABLE `modx_transport_providers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_users`
--
ALTER TABLE `modx_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_user_attributes`
--
ALTER TABLE `modx_user_attributes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `modx_user_group_roles`
--
ALTER TABLE `modx_user_group_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `modx_user_messages`
--
ALTER TABLE `modx_user_messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `modx_workspaces`
--
ALTER TABLE `modx_workspaces`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
