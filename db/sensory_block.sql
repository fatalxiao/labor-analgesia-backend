SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sensory_block
-- ----------------------------
DROP TABLE IF EXISTS `sensory_block`;
CREATE TABLE `sensory_block` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) DEFAULT NULL,
  `VALUE` int DEFAULT NULL,
  `type` int DEFAULT NULL COMMENT '阻滞平面类型，1：头端阻滞平面，2：尾端阻滞平面',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sensory_block_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3 COMMENT='阻滞平面';

-- ----------------------------
-- Records of sensory_block
-- ----------------------------
BEGIN;
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (1, 'S2', 7, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (2, 'S1', 6, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (3, 'L5', 5, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (4, 'L4', 4, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (5, 'L3', 3, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (6, 'L2', 2, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (7, 'L1', 1, 2);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (8, 'T12', 1, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (9, 'T11', 2, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (10, 'T10', 3, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (11, 'T9', 4, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (12, 'T8', 5, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (13, 'T7', 6, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (14, 'T6', 7, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (15, 'T5', 8, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (16, 'T4', 9, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (17, 'T3', 10, 1);
INSERT INTO `sensory_block` (`id`, `NAME`, `VALUE`, `type`) VALUES (18, 'T2', 11, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
