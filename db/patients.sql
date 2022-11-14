SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for patients
-- ----------------------------
DROP TABLE IF EXISTS `patients`;
CREATE TABLE `patients` (
  `id` varchar(10) NOT NULL COMMENT '住院号',
  `group_id` int DEFAULT NULL COMMENT '组别',
  `NAME` varchar(30) DEFAULT NULL COMMENT '姓名',
  `age` int DEFAULT NULL COMMENT '年龄',
  `gestational_days` int DEFAULT NULL COMMENT '怀孕天数',
  `height` float DEFAULT NULL COMMENT '身高',
  `weight` float DEFAULT NULL COMMENT '体重',
  `initial_vas_score` int DEFAULT NULL COMMENT '镇痛前VAS评分',
  `heart_rate` int DEFAULT NULL COMMENT '心率',
  `systolic_blood_pressure` int DEFAULT NULL COMMENT '收缩压',
  `diastolic_blood_pressure` int DEFAULT NULL COMMENT '舒张压',
  `fetal_heart_rate` int DEFAULT NULL COMMENT '胎心率',
  `pulse_oxygen_saturation` float DEFAULT NULL COMMENT '氧饱和度',
  `cervical_dilation_at_time_of_ea` int DEFAULT NULL COMMENT '镇痛前宫口',
  `has_oxytocin_at_time_of_ea` tinyint(1) DEFAULT '0' COMMENT '镇痛前是否使用催产素',
  `has_induction` tinyint(1) DEFAULT '0' COMMENT '是否引产',
  `description` varchar(1000) DEFAULT NULL COMMENT '备注',
  `STATUS` int DEFAULT '1' COMMENT '状态，1：启用，0：禁用',
  `utime` datetime DEFAULT NULL,
  `dtime` datetime DEFAULT NULL,
  `ctime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `patient_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='孕妇';

-- ----------------------------
-- Records of patients
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
