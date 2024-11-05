import DragDropVideoUpload from '@/components/coach-portal/DragDropVideoUpload';

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Coach&apos;s Portal
      </h1>
      <DragDropVideoUpload />
    </div>
  );
}
