import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="flex h-screen items-center justify-center bg-slate-900">
      <h1 className="text-3xl font-bold text-white">{t("homePage.title")}</h1>
    </main>
  );
}
