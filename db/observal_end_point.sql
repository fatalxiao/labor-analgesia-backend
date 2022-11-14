SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for observal_end_point
-- ----------------------------
DROP TABLE IF EXISTS `observal_end_point`;
CREATE TABLE `observal_end_point` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) DEFAULT NULL COMMENT '观察终点名称',
  PRIMARY KEY (`id`),
  UNIQUE KEY `observal_end_point_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COMMENT='观察终点';

-- ----------------------------
-- Records of observal_end_point
-- ----------------------------
BEGIN;
INSERT INTO `observal_end_point` (`id`, `NAME`) VALUES (1, '镇痛开始后6小时');
INSERT INTO `observal_end_point` (`id`, `NAME`) VALUES (2, '宫口开全');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
