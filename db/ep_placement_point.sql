SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ep_placement_point
-- ----------------------------
DROP TABLE IF EXISTS `ep_placement_point`;
CREATE TABLE `ep_placement_point` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) DEFAULT NULL COMMENT '硬膜外穿刺点位置名称',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ep_placement_point_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COMMENT='硬膜外穿刺点位置';

-- ----------------------------
-- Records of ep_placement_point
-- ----------------------------
BEGIN;
INSERT INTO `ep_placement_point` (`id`, `NAME`) VALUES (1, 'L2-3');
INSERT INTO `ep_placement_point` (`id`, `NAME`) VALUES (2, 'L3-4');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
