
interface TypographyItemProps {
  title: string;
  font: string;
  size: string;
  weight: string;
  style: string;
  lineHeight: string;
  letterSpacing: string;
  paragraphSpacing: string;
  sampleText: string;
  className?: string;
}

const TypographyItem: React.FC<TypographyItemProps> = ({
  title,
  font,
  size,
  weight,
  style,
  lineHeight,
  letterSpacing,
  paragraphSpacing,
  sampleText,
  className,
}) => {
  return (
    <div className="bg-[#07499408] border-2 border-dashed p-6 rounded-3xl">
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
        <div className="grid md:grid-cols-2 grid-col-1">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="">
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Font</p>
                        <p>{font}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Weight</p>
                        <p>{weight}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Size</p>
                        <p>{size}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Line Height</p>
                        <p>{lineHeight}</p>
                    </div>
                 </div>
                <div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Letter Spacing</p>
                        <p>{letterSpacing}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Style</p>
                        <p>{style}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Paragraph Spacing</p>
                        <p>{paragraphSpacing}</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Case</p>
                        <p>Original</p>
                    </div>
                </div>
            </div>
            <div className={className}>{sampleText}</div>
        </div>
      </div>
    </div>
  );
};

export const TypographyShowcase: React.FC = () => {
  return (
    <div className="space-y-6">
      <TypographyItem
        title="Heading 1"
        font="Inter"
        size="32px"
        weight="Semi Bold"
        style="Normal"
        lineHeight="Paragraph, 120%"
        letterSpacing="0px"
        paragraphSpacing="8px"
        sampleText="The quick brown fox jumps over the lazy dog."
        className="text-3xl font-semibold bg-white p-6 h-fit"
      />

      <TypographyItem
        title="Heading 2"
        font="Inter"
        size="24px"
        weight="Semi Bold"
        style="Normal"
        lineHeight="Paragraph, 120%"
        letterSpacing="0px"
        paragraphSpacing="8px"
        sampleText="The quick brown fox jumps over the lazy dog."
        className="text-2xl font-semibold bg-white p-6 h-fit"
      />

      <TypographyItem
        title="Sub heading bold"
        font="Inter"
        size="16px"
        weight="Bold"
        style="Normal"
        lineHeight="Paragraph, 150%"
        letterSpacing="0px"
        paragraphSpacing="8px"
        sampleText="The quick brown fox jumps over the lazy dog."
        className="text-base font-bold bg-white p-6 h-fit"
      />

      <TypographyItem
        title="Sub heading semi bold"
        font="Inter"
        size="16px"
        weight="Semi Bold"
        style="Normal"
        lineHeight="Paragraph, 150%"
        letterSpacing="0px"
        paragraphSpacing="8px"
        sampleText="The quick brown fox jumps over the lazy dog."
        className="text-base font-semibold bg-white p-6 h-fit"
        />
      <TypographyItem
        title="Body regular"
        font="Open Sans"
        size="16px"
        weight="SemiBold"
        style="Normal"
        lineHeight="Automatic"
        letterSpacing="1.5%"
        paragraphSpacing="8px"
        sampleText="The quick brown fox jumps over the lazy dog."
        className="text-base font-semibold bg-white p-6 h-fit"
      />
    </div>
  );
};
