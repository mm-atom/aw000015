/**
 * 获取值
 * @param key 键
 */
export default function get<T>(key: string, defualt_value?: T) {
	const value = localStorage.getItem(key);
	if (value) {
		return JSON.parse(value);
	}
	return defualt_value;
}
