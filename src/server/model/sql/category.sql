CREATE TABLE `crawler`.`category`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '类型 id',
  `name` varchar(400) CHARACTER SET utf8 NULL,
  `type_id` int(0) NULL COMMENT '数据 id',
  `description` varchar(600) NULL COMMENT '数据描述',
  PRIMARY KEY (`id`)
);