-- データベース作成
create database sake_db;
-- 使用データベース変更
use sake_db;
-- テーブル作成
create table sake_db.sake_table (
  id int auto_increment not null,
  sake_name nvarchar(100) not null,
  temperature float default 0.0 not null,
  alcohol_percentage float default 0.0 not null,
  created_at timestamp not null default current_timestamp,
  primary key (id)
);
-- データ挿入
insert into sake_db.sake_table (
  sake_name,
  temperature,
  alcohol_percentage
) values
('菊水',25.5,15.2),
('桂政宗', 15.9, 13.2);
-- ユーザ作成
create user dbadmin identified by 'sake_maehara';
create user webuser identified by 'sake_zakiyama';
-- 権限付与
grant all on sake_db.* to dbadmin;
grant select,insert on sake_db.* to webuser;
-- ユーザ確認
select Host, User from mysql.user; 
-- 権限確認
show grants for webuser;