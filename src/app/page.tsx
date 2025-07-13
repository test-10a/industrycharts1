export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <header className="mb-10 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">
          To generate personalized business charts, our AI system requires either of:
        </h1>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Document context from Google Drive (file count and types for appropriate chart scaling)</li>
          <li>Communication patterns from Gmail (email volume for productivity metrics)</li>
          <li>Calendar data (meeting frequency for workload analysis)</li>
        </ul>
      </header>

      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold text-blue-600">
          Create your personalized industry charts!
        </h2>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500 border-t pt-6">
        © 2025 IndustryCharts. All rights reserved. •{' '}
        <a href="#" className="underline">Privacy</a> •{' '}
        <a href="#" className="underline">Contact</a>
      </footer>
    </main>
  );
}

