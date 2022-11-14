SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for patient_group
-- ----------------------------
DROP TABLE IF EXISTS `patient_group`;
CREATE TABLE `patient_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL COMMENT '组名',
  PRIMARY KEY (`id`),
  UNIQUE KEY `patient_group_id_uindex` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='分组';

-- ----------------------------
-- Records of patient_group
-- ----------------------------
BEGIN;
INSERT INTO `patient_group` (`id`, `name`) VALUES (1, '30Min');
INSERT INTO `patient_group` (`id`, `name`) VALUES (2, '40Min');
INSERT INTO `patient_group` (`id`, `name`) VALUES (3, '50Min');
INSERT INTO `patient_group` (`id`, `name`) VALUES (4, '60Min');
INSERT INTO `patient_group` (`id`, `name`) VALUES (5, 'Other');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
