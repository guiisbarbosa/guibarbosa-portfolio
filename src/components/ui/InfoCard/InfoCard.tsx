import type { InfoCardProps } from './InfoCard.types'

export const InfoCard = ({ main, label }: InfoCardProps) => {
  return (
    <div
      className="bg-linear-to-b from-(--c-800)/40 to--(--c-900)/20 border border-(--c-600)/30 rounded-xl p-6 sm:p-8 text-center hover:border-(--c-600)/70 transition-colors duration-300"
    >
      <div className="text-3xl sm:text-4xl font-bold text-(--c-400) mb-2 justify-center flex items-center">
        {main}
      </div>
      <div className="text-sm sm:text-base text-(--neutral-light)">
        {label}
      </div>
    </div>
  );
}