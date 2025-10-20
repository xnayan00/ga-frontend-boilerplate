import { useTranslation } from "react-i18next";
import Avatar from "../components/atoms/Avatar/Avatar";
import Button from "../components/atoms/Button/Button";

function HomePage() {
  const { t, i18n } = useTranslation();

  function toggleLanguage(): void {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </Button>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Avatar
              alt="Boilerplate Logo"
              size="xl"
              fallback="BP"
            />
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            {t("welcome")}
          </h1>

          <p className="mb-12 text-xl text-muted-foreground">
            {t("description")}
          </p>

          <div className="mb-16 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
            >
              {t("getStarted")}
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              {t("learnMore")}
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-elegant">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-3xl text-primary-foreground">
                  ⚛️
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {t("features.atomicDesign")}
              </h3>
              <p className="text-muted-foreground">
                {t("features.atomicDesignDesc")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-elegant">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-3xl text-secondary-foreground">
                  🌍
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {t("features.i18n")}
              </h3>
              <p className="text-muted-foreground">
                {t("features.i18nDesc")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-elegant">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-3xl text-accent-foreground">
                  📚
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {t("features.storybook")}
              </h3>
              <p className="text-muted-foreground">
                {t("features.storybookDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
