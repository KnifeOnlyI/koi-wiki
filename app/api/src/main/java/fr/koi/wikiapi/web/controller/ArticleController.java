package fr.koi.wikiapi.web.controller;

import fr.koi.wikiapi.constants.Urls;
import fr.koi.wikiapi.web.model.article.ArticleModel;
import fr.koi.wikiapi.web.model.article.ArticleSearchCriteria;
import fr.koi.wikiapi.web.model.article.CreateOrUpdateArticleModel;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

/**
 * The controller to manage articles.
 */
@RestController
@RequiredArgsConstructor
@Transactional
public class ArticleController {

    /**
     * Search entities.
     *
     * @param criteria The criteria
     *
     * @return The results
     */
    @GetMapping(Urls.Article.BASE)
    public Page<ArticleModel> search(final ArticleSearchCriteria criteria) {
        return null;
    }

    /**
     * Get a model with the specified ID and throw an error if not exists.
     *
     * @param id The ID
     *
     * @return The found model
     */
    @GetMapping(Urls.Article.UNIQUE)
    public ArticleModel getById(@PathVariable final Long id) {
        return null;
    }

    /**
     * Create a new entity.
     *
     * @param data The data of entity to create
     *
     * @return The created entity
     */
    @PostMapping(Urls.Article.BASE)
    public ArticleModel create(@RequestBody @Valid final CreateOrUpdateArticleModel data) {
        return null;
    }

    /**
     * Update an entity based on the specified data.
     *
     * @param id   The ID of entity to update
     * @param data The data of entity to create
     *
     * @return A model that represent the updated entity
     */
    @PutMapping(Urls.Article.UNIQUE)
    public ArticleModel update(
        @PathVariable final Long id,
        @RequestBody @Valid final CreateOrUpdateArticleModel data
    ) {
        return null;
    }

    /**
     * Delete the specified entity identified by his ID.
     *
     * @param id The ID of entity to delete
     */
    @DeleteMapping(Urls.Article.UNIQUE)
    public void delete(@PathVariable final Long id) {
    }
}
