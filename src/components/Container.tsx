export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {children}
    </div>
  );
}
