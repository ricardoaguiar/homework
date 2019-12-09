set names utf8mb4;

create table `class` (
  `id` int(10) unsigned not null auto_increment,
  `name` text not null,
  `begins` datetime not null,
  `ends` datetime not null,
  primary key (`id`)
)engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;


create table `student` (
  `id` int(10) unsigned not null auto_increment,
  `name` varchar(100) not null,
  `email` text null default null,
  `phone` text not null,
  `class_id` int(10) unsigned NOT NULL,
  primary key (`id`),
  constraint `fk_class` foreign key (`class_id`) references `class` (`id`) on delete cascade
  );
 
alter table student add column status enum ('not-started','ongoing','finished');
create index name_index on student (name);
create index status_index on student (status);
-- select * from student where status = 0;
