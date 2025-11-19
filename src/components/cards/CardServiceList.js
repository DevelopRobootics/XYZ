export default function CardServiceList({
	icon,
	title,
	message,
	linkText = "Ver más",
	linkUrl = "#",
}) {
	return (
		<div className="group relative max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">

			{/* Icono */}
			<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4">
				{icon}
			</div>

			{/* Título con enlace */}
			<a href={linkUrl}>
				<h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-200">
					{title}
				</h5>
			</a>

			{/* Mensaje */}
			<p className="text-sm text-gray-700 mb-4 leading-relaxed">
				{message}
			</p>

			{/* Enlace inferior */}
			<a
				href={linkUrl}
				className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200"
			>
				{linkText}
				<svg
					className="w-4 h-4 ml-2 rtl:rotate-[270deg] transition-transform group-hover:translate-x-1"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 18"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
					/>
				</svg>
			</a>
		</div>
	);
}
