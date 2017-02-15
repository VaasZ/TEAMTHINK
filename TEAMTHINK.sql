-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-01-18 17:39:36
-- 服务器版本： 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `TEAMTHINK`
--

-- --------------------------------------------------------

--
-- 表的结构 `TEAMTHINK`
--

CREATE TABLE IF NOT EXISTS `TEAMTHINK` (
`id` int(10) NOT NULL COMMENT '编号',
  `img` text NOT NULL COMMENT '图片地址',
  `color` text NOT NULL COMMENT '背景颜色',
  `pEng` text NOT NULL COMMENT '公司名英文',
  `pCHN` text NOT NULL COMMENT '公司名中文',
  `localLink` text NOT NULL COMMENT '本地连接',
  `friendLink` text NOT NULL COMMENT '友链',
  `type` text NOT NULL COMMENT '类型'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='homeoage' AUTO_INCREMENT=34 ;

--
-- 转存表中的数据 `TEAMTHINK`
--

INSERT INTO `TEAMTHINK` (`id`, `img`, `color`, `pEng`, `pCHN`, `localLink`, `friendLink`, `type`) VALUES
(1, 'lanyisk.jpg', '#008ccf', 'LANYISK', '蓝意时空', '', '', 'html5 mobile qita'),
(2, 'modesign.jpg', '#c6ba9a', 'MODESIGN', '莫多家居', '', '', 'html5 mobile furniture'),
(3, 'the-dance-of-life.jpg', '#e08392', 'EP - The Dance of Life', 'EP - 无处不起舞', '', '', 'html5 mobile fashion'),
(4, 'marcopolo.jpg', '#990000', 'Marco Polo', '马可波罗', '', '', 'html5 mobile furniture'),
(5, 'decci.jpg', '#0495a6', 'DECCI', '德驰家居', '', '', 'html5 mobile furniture'),
(6, 'bmw-i3.jpg', '#1E6ED2', 'BMW i3', '移动网站', '', '', 'html5 mobile car'),
(7, 'jubons.jpg', '#c8161e', 'Jubons', '筑邦臣', '', '', 'html5 mobile design'),
(8, 'jefen.jpg', '#b69978', 'Jefen', '吉芬', '', '', 'html5 mobile fashion'),
(9, 'cuigongchang.jpg', '#c9a063', 'Cui Gong Chang', '翠工厂', '', '', 'html5 mobile jewellery'),
(10, 'la-careation.jpg', '#001e2b', 'LA CREATION', '玛利洛', '', '', 'html5 mobile furniture'),
(11, 'cagliari.jpg', '#444', 'Cagliari Exchange + Cagli Wash', '卡利亚里 + 珂瑮瓁琪', '', '', 'html5 mobile fashion'),
(12, 'mexarts.jpg', '#bc2e2e', 'Mexarts', '漾美', '', '', 'html5 mobile furniture'),
(13, 'cistomize-the-youth.jpg', '#500000', 'Customize the Youth', '订制年轻私人之旅', '', '', 'html5 mobile qita'),
(14, 'jimc.jpg', '#b48b69', 'J.I.M.C.', '焯森国际医疗集团', '', '', 'html5 mobile qita'),
(15, 'cecile-carine.jpg', '#574545', 'Cecile Carine', '赛斯珂瑞', '', '', 'html5 mobile fashion'),
(16, 'wva.jpg', '#009e3a', 'WVA Architects', 'WVA 建筑设计', '', '', 'html5 mobile design'),
(17, 'gd.jpg', '#454a53', 'GD LIGHTING DESIGN', '大观国际', '', '', 'html5 design'),
(18, 'hwa.jpg', '#c70026', 'HWA Fashion Group', '华之毅时尚集团', '', '', 'html5 mobile fashion'),
(19, 'baoyihe.jpg', '#b98f4d', 'BAOYIHE Jewelry Club', '宝怡和翡翠会', '', '', 'html5 flash mobile'),
(20, 'linx.jpg', '#000', 'Linx Shanghai', 'Linx 上海', '', '', 'html5 qita'),
(21, 'lecool.jpg', '#503120', 'Lecool Town', '乐酷小镇', '', '', 'flash estate'),
(22, 'acbi.jpg', '#3399cc', 'ACBI', '宝佳国际', '', '', 'flash design'),
(23, 'perstorp.jpg', '#00a0e9', 'Perstorp', 'Perstorp', '', '', 'flash qita'),
(24, 'minigem.jpg', '#dfaf90', 'Minigem', 'Minigem', '', '', 'flash jewellery'),
(25, 'longteng-models.jpg', '#000', 'Longteng Models', '龙腾精英', '', '', 'flash fashion'),
(26, 'cuipinwu.jpg', '#d4003a', 'CUIPINWU', '翠品屋', '', '', 'flash jewellery'),
(27, 'the-west-coast.jpg', '#0099cc', 'The West Coast', '保利 • 西海岸', '', '', 'flash estate'),
(28, 'zhaoyi.jpg', '#cc0000', 'Zhaoyi', '昭仪翠屋', '', '', 'flash jewellery'),
(29, 'brook-forest-garden.jpg', '#006666', 'Brook Forest Garden', '保利 • 溪湖林语', '', '', 'flash estate'),
(30, 'poly-liaoning.jpg', '#81b0d7', 'Poly Real Estate Liaoning', '保利地产 • 辽宁', '', '', 'flash estate'),
(31, 'camerich.jpg', '#817464', 'Camerich', '锐驰', '', '', 'flash furniture'),
(32, 'byd-f0.jpg', '#58a44c', 'BYD F0', '比亚迪 F0', '', '', 'flash car'),
(33, 'chuan.jpg', '#222', 'Chuan Production Film Studio', '川制作', '', '', 'flash qita');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TEAMTHINK`
--
ALTER TABLE `TEAMTHINK`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `TEAMTHINK`
--
ALTER TABLE `TEAMTHINK`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '编号',AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
