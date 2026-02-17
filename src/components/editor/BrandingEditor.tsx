import Card from '../ui/Card';
import LogoUpload from './LogoUpload';
import TemplatePicker from './TemplatePicker';
import ColorPicker from './ColorPicker';

export default function BrandingEditor() {
  return (
    <Card title="Branding">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-gray-600">Logo</label>
          <LogoUpload />
        </div>
        <TemplatePicker />
        <ColorPicker />
      </div>
    </Card>
  );
}
