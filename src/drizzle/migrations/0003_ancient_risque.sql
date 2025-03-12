PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`content` text NOT NULL,
	`category` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`deletedAt` integer,
	`description` text,
	`status` text NOT NULL,
	`title` text NOT NULL,
	`updatedAt` integer,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_posts`("id", "slug", "content", "category", "createdAt", "deletedAt", "description", "status", "title", "updatedAt", "userId") SELECT "id", "slug", "content", "category", "createdAt", "deletedAt", "description", "status", "title", "updatedAt", "userId" FROM `posts`;--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
ALTER TABLE `__new_posts` RENAME TO `posts`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);