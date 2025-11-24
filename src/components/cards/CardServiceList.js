import Image from "next/image";

export default function CardServiceList({
	iconSrc,
	title,
	message,
	linkText,
	linkUrl,
}) {
	const hasLink = linkText && linkUrl;

	return (
		<div className="group relative max-w-sm p-6">
			{/* Icono como imagen */}
			<div className="flex items-center justify-start w-14 h-14 rounded-full mb-4 overflow-hidden">
				{iconSrc && (
					<Image
						src={iconSrc}
						alt="Icono"
						width={40}
						height={40}
						className="object-contain"
					/>
				)}
			</div>

			<div className="flex flex-col h-full justify-start text-left">
				{/* Título con o sin enlace */}
				{hasLink ? (
					<a href={linkUrl}>
						<h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-200">
							{title}
						</h5>
					</a>
				) : (
					<h5 className="text-xl font-bold text-gray-900 mb-2">{title}</h5>
				)}

				{/* Mensaje */}
				<p className="text-sm text-gray-700 mb-4 leading-relaxed">
					{message}
				</p>

				{/* Enlace inferior si existe */}
				{hasLink && (
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
				)}
			</div>
		</div>
	);
}
