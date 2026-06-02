import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "关于我",

	// 公告内容
	content: "来了就随便看看吧",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "是我没错了",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
